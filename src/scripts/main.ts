// Client-side behaviour. No framework, no libraries — about 3 KB once minified.
// Each function exits quietly when its element isn't on the page.

const $ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
    root.querySelector<T>(sel);
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
    Array.from(root.querySelectorAll<T>(sel));
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Fade-up anything with data-reveal as it enters the screen */
function initReveals() {
    const items = $$('[data-reveal]');
    if (reducedMotion || !('IntersectionObserver' in window)) {
        items.forEach((el) => el.classList.add('is-in'));
        return;
    }
    const io = new IntersectionObserver(
        (entries) =>
            entries.forEach((e) => {
                if (!e.isIntersecting) return;
                e.target.classList.add('is-in');
                io.unobserve(e.target);
            }),
        { rootMargin: '0px 0px -8% 0px' },
    );
    items.forEach((el) => io.observe(el));
}

/** Mobile menu: toggle, Esc to close, close on link click */
function initMenu() {
    const btn = $<HTMLButtonElement>('[data-menu-toggle]');
    const menu = $('[data-menu]');
    if (!btn || !menu) return;
    const set = (open: boolean) => {
        btn.setAttribute('aria-expanded', String(open));
        btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        menu.hidden = !open;
        document.body.classList.toggle('menu-open', open);
    };
    btn.addEventListener('click', () => set(btn.getAttribute('aria-expanded') !== 'true'));
    $$('[data-menu-link]', menu).forEach((a) => a.addEventListener('click', () => set(false)));
    document.addEventListener('keydown', (e) => e.key === 'Escape' && !menu.hidden && (set(false), btn.focus()));
}

/** Underline the nav link of the section currently on screen (home page) */
function initActiveNav() {
    const sections = $$('[data-section]');
    if (!sections.length || !('IntersectionObserver' in window)) return;
    const links = $$<HTMLAnchorElement>('.nav__links a');
    const io = new IntersectionObserver(
        (entries) =>
            entries.forEach((e) => {
                if (!e.isIntersecting) return;
                links.forEach((a) => a.classList.toggle('is-active', a.hash === `#${e.target.id}`));
            }),
        { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((s) => io.observe(s));
}

/** Work grid filters */
function initFilters() {
    const buttons = $$<HTMLButtonElement>('[data-filter]');
    const cards = $$('[data-work-grid] > li');
    const empty = $('[data-work-empty]');
    if (!buttons.length) return;
    buttons.forEach((btn) =>
        btn.addEventListener('click', () => {
            const f = btn.dataset.filter;
            buttons.forEach((b) => b.setAttribute('aria-pressed', String(b === btn)));
            let shown = 0;
            cards.forEach((c) => {
                const show = f === 'All' || c.dataset.category === f;
                c.hidden = !show;
                if (show) {
                    shown++;
                    c.classList.add('is-in');
                }
            });
            if (empty) empty.hidden = shown > 0;
        }),
    );
}

/** Showreel: the heavy Vimeo/YouTube player only loads when Play is pressed */
function initReel() {
    const player = $('[data-reel]');
    const play = $<HTMLButtonElement>('[data-reel-play]');
    if (!play) return;
    play.addEventListener('click', () => {
        const src = player?.dataset.reel;
        if (!player || !src) {
            play.setAttribute('aria-label', 'Showreel coming soon');
            play.title = 'Showreel coming soon';
            return;
        }
        const join = src.includes('?') ? '&' : '?';
        player.innerHTML = `<iframe src="${src}${join}autoplay=1" title="Todimu Adegoke — showreel" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>`;
    });
}

/** Decorative 24fps timecode in the hero that runs with scroll (clearly stylistic, not "live") */
function initTimecode() {
    const tc = $('[data-timecode]');
    if (!tc) return;
    const pad = (n: number) => String(Math.floor(n)).padStart(2, '0');
    let ticking = false;
    const update = () => {
        const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
        const t = (scrollY / max) * 240; // the page "runs" four minutes
        tc.textContent = `TC 00:${pad(t / 60)}:${pad(t % 60)}:${pad((t % 1) * 24)}`;
        ticking = false;
    };
    addEventListener(
        'scroll',
        () => {
            if (!ticking) {
                ticking = true;
                requestAnimationFrame(update);
            }
        },
        { passive: true },
    );
}

/** Contact form → Web3Forms (if a key is set) or the visitor's email app */
function initForm() {
    const form = $<HTMLFormElement>('[data-contact-form]');
    if (!form) return;
    const status = $('[data-form-status]', form)!;
    const submit = $<HTMLButtonElement>('button[type="submit"]', form)!;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        let ok = true;
        $$<HTMLInputElement>('[required]', form).forEach((f) => {
            const valid = f.value.trim() !== '' && (f.type !== 'email' || /^\S+@\S+\.\S+$/.test(f.value));
            f.setAttribute('aria-invalid', String(!valid));
            if (!valid) ok = false;
        });
        if (!ok) {
            status.textContent = 'Please add your name, a valid email and a short brief.';
            $<HTMLElement>('[aria-invalid="true"]', form)?.focus();
            return;
        }

        const data = new FormData(form);
        if (data.get('botcheck')) return; // spam bot

        const key = form.dataset.key;
        if (!key) {
            const body = ['name', 'email', 'project_type', 'dates', 'message']
                .map((k) => `${k.replace('_', ' ')}: ${data.get(k) ?? ''}`)
                .join('\n');
            location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(
                `Project enquiry — ${data.get('project_type')}`,
            )}&body=${encodeURIComponent(body)}`;
            status.textContent = 'Opening your email app…';
            return;
        }

        data.append('access_key', key);
        submit.disabled = true;
        status.textContent = 'Sending…';
        try {
            const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
            const json = await res.json();
            if (!json.success) throw new Error(json.message);
            form.reset();
            status.textContent = form.dataset.success ?? 'Sent.';
        } catch {
            status.textContent = `Something went wrong. Please email ${form.dataset.email} directly.`;
        } finally {
            submit.disabled = false;
        }
    });
}

/** Journal post: share / copy-link button */
function initShare() {
    $$<HTMLButtonElement>('[data-share]').forEach((btn) =>
        btn.addEventListener('click', async () => {
            const url = location.href;
            const title = document.title;
            try {
                if (navigator.share) await navigator.share({ title, url });
                else {
                    await navigator.clipboard.writeText(url);
                    const old = btn.textContent;
                    btn.textContent = 'Link copied ✓';
                    setTimeout(() => (btn.textContent = old), 2000);
                }
            } catch {
                /* user cancelled */
            }
        }),
    );
}

initReveals();
initMenu();
initActiveNav();
initFilters();
initReel();
initTimecode();
initForm();
initShare();