// ─────────────────────────────────────────────────────────────
//  SITE CONTENT — every word on the home page lives here.
//  Source: "Todimu Adegoke — Personal Website Content & Designer Handoff".
//  Media paths point to /public/media. Leave a media field empty ('')
//  and a labelled placeholder shows instead, so the layout holds.
//  Lines marked  ⚠ CONFIRM  must be checked with Todimu before launch.
// ─────────────────────────────────────────────────────────────

export const site = {
    name: 'Todimu Adegoke',
    shortRole: 'Filmmaker · Producer · Cinematographer',
    descriptor: 'Film & TV Producer | Cinematographer | Director | Editor | Development Executive',
    location: 'United Kingdom',
    url: 'https://todimuadegoke.com', // ⚠ CONFIRM final domain (also in astro.config.mjs + public/robots.txt)
    email: 'adegoketee@gmail.com',
    portfolio: 'https://linktr.ee/tothemu_portfolio',
    imdb: 'https://www.imdb.com/name/nm16424644/',

    // SEO (from the handoff document)
    seoTitle: 'Todimu Adegoke | Film & TV Producer, Cinematographer, Director & Editor',
    seoDescription:
        'Explore the work of Todimu Adegoke, a Film and TV Producer, Cinematographer, Director, Editor and Development Executive working across feature films, television, documentaries and branded content.',
    shareTitle: 'Todimu Adegoke — Stories Built With Vision',
    shareDescription:
        'From story development to the final frame: film, television, documentary and branded storytelling.',
    shareImage: '/og-image.jpg', // 1200×630, add to /public
    shareImageAlt: 'Todimu Adegoke on a film production set operating a camera.',

    // Media — drop files in /public/media and fill these in
    heroVideo: '', // e.g. '/media/hero-loop.mp4'  (muted 10–20s loop, under 4 MB)
    heroPoster: '', // e.g. '/media/hero-poster.jpg' (first frame of the loop, 2.39:1)
    portrait: '', // e.g. '/media/portrait.jpg'    (hero card, 4:5)
    portraitBw: '', // e.g. '/media/portrait-bw.jpg' (Story section, black & white)
    btsStill: '', // e.g. '/media/bts.jpg'         (Story section, small inset)
    reelEmbed: '', // e.g. 'https://player.vimeo.com/video/000000000'
    reelPoster: '', // e.g. '/media/reel-poster.jpg'
    reelRuntime: '', // ⚠ CONFIRM — final runtime of the approved reel, e.g. '02:30'

    // Contact form: paste a Web3Forms access key to send enquiries by email.
    // Empty = the form opens the visitor's email app instead.
    web3formsKey: '',

    // Socials — only add confirmed URLs. Empty ones are hidden automatically.
    socials: [
        { label: 'Portfolio', href: 'https://linktr.ee/tothemu_portfolio' },
        { label: 'IMDb', href: 'https://www.imdb.com/name/nm16424644/' },
        { label: 'LinkedIn', href: '' }, // ⚠ CONFIRM
        { label: 'Instagram', href: '' }, // ⚠ CONFIRM
        { label: 'Vimeo', href: '' }, // ⚠ CONFIRM
    ],
};

export const nav = [
    { no: '01', label: 'Vision', href: '/#vision' },
    { no: '02', label: 'Selected Work', href: '/#work' },
    { no: '03', label: 'Story', href: '/#story' },
    { no: '04', label: 'Credits', href: '/#credits' },
    { no: '05', label: 'Journal', href: '/journal/' },
];

export const hero = {
    label: 'Showreel · Film / TV / Documentary / Branded',
    arc: 'Story → Production → Cinematography → Delivery',
    titleLines: ['The story', 'starts before', 'the camera'],
    titleAccent: 'rolls.',
    text: 'Film and television producer, cinematographer, director and editor. I develop stories, shape visual language and lead productions from the first idea through filming, post-production and final delivery. Across narrative film, television, documentary and branded content, my focus is work with a clear point of view and a human connection.',
    card: {
        role: 'Producer · Cinematographer · Editor',
        location: 'United Kingdom',
        status: 'Available for selected projects',
    },
    strip: ['Story', 'Production', 'Cinematography', 'Editing', 'Delivery'],
};

export const vision = {
    headline: 'I don’t just capture the story.',
    headlineMuted: 'I help build it.',
    text: 'A strong image matters. So does the idea behind it, the people at its centre and the decisions that carry it from script to screen. My work brings development, production and post-production into one creative process — so the story remains clear, purposeful and engaging at every stage.',
    principles: [
        {
            title: 'Story before spectacle',
            text: 'Every creative decision should serve the story. I begin by understanding the subject, audience and emotional core, then build the visual approach around what the work needs to communicate.',
        },
        {
            title: 'From concept to final frame',
            text: 'I work across development, writing, producing, directing, cinematography and editing. That connected perspective helps keep the original intention alive through every stage of production.',
        },
        {
            title: 'Craft with purpose',
            text: 'Strong visuals and polished post-production should do more than impress. They should make the work clearer, more memorable and more meaningful to the people watching.',
        },
    ],
};

export const reel = {
    label: 'Selected work · Showreel',
    title: 'A body of work. Many ways to tell a story.',
    caption:
        'A selection of narrative, documentary, television and branded work across producing, directing, cinematography and editing.',
};

// ── ACT II — SELECTED WORK ──────────────────────────────────
export type Category = 'Feature Film' | 'Television' | 'Documentary' | 'Education' | 'Branded / Digital';

export const workIntro =
    'A selection of projects across film, television, documentary, education and branded storytelling. Each project reflects a different part of the process — from developing the idea and leading production to shaping the image and finishing the story.';

export const filters: ('All' | Category)[] = [
    'All',
    'Feature Film',
    'Television',
    'Documentary',
    'Education',
    'Branded / Digital',
];

export type Work = {
    no: string;
    title: string;
    format: string;
    category: Category;
    credit: string;
    text: string;
    image: string; // approved still / key art only
    link?: string; // optional: trailer, IMDb or Netflix page
};

export const works: Work[] = [
    {
        no: 'SC.01',
        title: 'Tokunbo',
        format: 'Feature Film · Netflix Original',
        category: 'Feature Film',
        credit: 'Development Executive · Lead Writer',
        text: 'A feature film developed and written by Todimu, released as a Netflix Original. The film received an AMVCA 2025 nomination and reached Netflix Top 10 lists in multiple countries.',
        image: '',
    },
    {
        no: 'SC.02',
        title: 'Unscripted',
        format: 'Television Series',
        category: 'Television',
        credit: 'Writer · Director · Editor · Post-Production Supervisor',
        text: 'A television series for which Todimu shaped the writing and creative direction, directed the production, edited the episodes and supervised post-production.',
        image: '',
    },
    {
        no: 'SC.03',
        title: 'Sesame Square [NY]',
        format: 'Educational Series',
        category: 'Education',
        credit: 'Co-Director',
        text: 'An educational series credit demonstrating experience in purposeful, audience-focused storytelling and collaborative direction.',
        image: '',
    },
    {
        no: 'SC.04',
        title: 'Kari',
        format: 'Advocacy Film',
        category: 'Documentary',
        credit: 'Producer · Director · Cinematographer · Editor',
        text: 'An advocacy film on which Todimu held creative and production responsibilities across the full filmmaking process.',
        image: '',
    },
    {
        no: 'SC.05',
        title: 'TFPAW Documentary',
        format: 'Documentary',
        category: 'Documentary',
        credit: 'Producer · Cinematographer · Editor',
        text: 'A documentary project produced, shot and edited by Todimu, reflecting his work in documentary and community-focused storytelling.',
        image: '',
    },
    {
        no: 'SC.06',
        title: 'The Bid',
        format: 'Film / Screen Project', // ⚠ CONFIRM exact format
        category: 'Branded / Digital', // ⚠ CONFIRM category once the format is known
        credit: 'Producer · Editor',
        text: 'A screen project for which Todimu was credited as producer and editor.',
        image: '',
    },
];

// ── ACT III — STORY ─────────────────────────────────────────
export const story = {
    headline: 'The filmmaker behind the frame.',
    paragraphs: [
        'Todimu Adegoke is a Film and TV Producer, Cinematographer, Editor and Development Executive whose work spans feature films, television, documentaries, educational productions, branded campaigns and digital content. Since beginning his professional career in 2016, he has worked across the full screen-production process — developing ideas, writing scripts and treatments, producing and directing projects, operating camera, shaping edits and overseeing post-production through final delivery.',
        'His approach is grounded in story and collaboration. Whether developing a feature screenplay, producing a documentary, directing a television project or creating content for a brand, he looks for the human detail that gives the work meaning and the visual language that helps an audience connect with it.',
        'As Development Executive and Lead Writer on TOKUNBO, a Netflix Original, he helped take a story from development and screenplay through to a global streaming release. His work on UNSCRIPTED brought together writing, directing, editing and post-production supervision. Across other projects, he has created educational and advocacy content, led multi-camera studio and live-event productions, and worked with creative teams and NGO stakeholders to deliver stories with clear audience and advocacy goals.',
        'He is trained in Advanced Cinema Editing at the University of Southern California’s School of Cinematic Arts through its partnership with Netflix, under Oscar-winning editor Doug Blush. His further training includes post-production with Niyi Akinmolayan, post-production training at Anthill Studios, story development through the Catalyst Story Institute and U.S. Embassy fellowship, and film production and business programmes.',
        'Todimu is endorsed under the UK Global Talent route in the Exceptional Talent category for his work in Film and Television. He was selected as one of 35 global producers for the Berlinale 2026 European Film Market Producer’s Toolbox and was also selected for the U.S. Embassy x Catalyst Story Institute Global Storytelling Initiative in 2021.',
    ],
    caption: 'Behind the frame: developing the idea, building the image and bringing the production together.',
    stats: [
        { value: '10+', label: 'Years of professional screen-production experience' },
        { value: '60+', label: 'Emerging filmmakers mentored through Xclusive Hideout Film Workshop' },
        { value: '35', label: 'Producers selected globally for the Berlinale 2026 EFM Producer’s Toolbox' },
    ],
};

// ── ACT IV — CREDITS ────────────────────────────────────────
// Leave year/director as '' until confirmed. If every row is empty,
// that column is hidden automatically.
export const filmography = [
    { year: '', title: 'Tokunbo', director: '', format: 'Feature Film / Netflix Original', role: 'Development Executive · Lead Writer' },
    { year: '', title: 'Unscripted', director: '', format: 'Television Series', role: 'Writer · Director · Editor · Post-Production Supervisor' },
    { year: '', title: 'Sesame Square [NY]', director: '', format: 'Educational Series', role: 'Co-Director' },
    { year: '', title: 'Kari', director: '', format: 'Advocacy Film', role: 'Producer · Director · Cinematographer · Editor' },
    { year: '', title: 'TFPAW Documentary', director: '', format: 'Documentary', role: 'Producer · Cinematographer · Editor' },
    { year: '', title: 'The Bid', director: '', format: 'Screen Project', role: 'Producer · Editor' },
    { year: '', title: 'Exhale', director: '', format: 'Europe–African Co-production', role: 'Lead Writer' },
    { year: '', title: 'The Brunt', director: '', format: 'Screen Project', role: 'Director · Editor · Cinematographer' },
    { year: '', title: 'Makoko', director: '', format: 'Feature in Development (Sozo Films)', role: 'Co-Writer' },
    { year: '', title: 'ThePelumiAlabi Series', director: '', format: 'Series', role: 'Director · Cinematographer · Editor' }, // ⚠ CONFIRM spelling
    { year: '', title: 'My 18th Birthday', director: '', format: 'Screen Project', role: 'Director · Editor · Producer' },
];

// `show: false` keeps an item off the site until it is confirmed.
export const recognition = [
    { label: 'Exceptional Talent', title: 'UK Global Talent', text: 'Endorsed under the Exceptional Talent category for Film and Television (BFI / Arts Council England).', show: true },
    { label: 'Selected Producer', title: 'Berlinale 2026 — EFM Producer’s Toolbox', text: 'One of 35 global producers selected for the European Film Market Producer’s Toolbox Programme, Germany.', show: true },
    { label: 'Nominee', title: 'AMVCA 2025 — Tokunbo', text: 'Africa Magic Viewers’ Choice Awards nomination for the Netflix Original.', show: true },
    { label: 'Netflix Top 10', title: 'Tokunbo', text: 'Reached Netflix Top 10 lists in multiple countries.', show: true },
    { label: 'Selected Filmmaker', title: 'U.S. Embassy × Catalyst Story Institute', text: 'Global Storytelling Initiative, 2021.', show: true },
    { label: 'Speaker', title: 'Nigerian International Film Summit', text: 'Next Generation Filmmakers Panel, 2021.', show: true },
    { label: '2026', title: 'Toronto International Film Festival', text: 'Confirm the exact nature of participation before publishing.', show: false }, // ⚠ CONFIRM
];

export const training = [
    { year: '2026', title: 'Berlinale European Film Market', text: 'EFM Producer’s Toolbox Fellowship — Film and Documentary Production' },
    { year: '2022', title: 'USC School of Cinematic Arts × Netflix × KAP', text: 'Advanced Cinema Editing, under Oscar-winning editor Doug Blush' },
    { year: '2021', title: 'NIFS FilmBiz Hub', text: 'Business of Film' },
    { year: '2021', title: 'Next-Gen Cohort', text: 'Film Production Standards' },
    { year: '2020', title: 'Post with Niyi Akinmolayan', text: 'Post-Production: Editing and Colour Grading' },
    { year: '2017', title: 'Mastershots Film Academy', text: 'Cinematography, Editing and Directing' },
    { year: '', title: 'Anthill Studios', text: 'Post-production training' },
    { year: '', title: 'Catalyst Story Institute + U.S. Embassy Fellowship', text: 'Story Development' },
    { year: '', title: 'MCWCO 2.0 Filmmaker Residency', text: 'Film and TV Production' },
    { year: '', title: 'Teesside University, United Kingdom', text: 'MSc Computer Science' },
    { year: '', title: 'University of Ilorin, Nigeria', text: 'BEng Computer Engineering' },
];

// ── SERVICES + KIT ──────────────────────────────────────────
export const services = [
    { title: 'Film & Television Production', text: 'From development and planning to production and delivery. Producing narrative films, television programmes and screen projects with attention to story, people, resources and execution.' },
    { title: 'Cinematography & Directing', text: 'Visual storytelling shaped through camera, lighting, composition and direction. Single-camera and multi-camera production for narrative, documentary, studio and live-event work.' },
    { title: 'Editing & Post-Production', text: 'Story-led editing, post-production supervision and finishing. From footage organisation and editorial structure to colour, motion graphics, versioning and platform-ready delivery.' },
    { title: 'Documentary & Social-Impact Storytelling', text: 'Human-centred stories that bring people, communities and issues into focus. Documentary, advocacy, educational and NGO-related content developed with sensitivity and purpose.' },
    { title: 'Branded & Digital Content', text: 'Promotional campaigns, branded films, podcasts and social-first content adapted for television, web and digital platforms.' },
];

export const kit = [
    { label: 'Camera systems', value: 'RED, Sony camera systems and Canon cameras; single- and multi-camera setups' },
    { label: 'Cinematography', value: 'Camera operation, composition, visual storytelling and lighting design' },
    { label: 'Lighting', value: 'Studio, location, interview and multi-camera productions' },
    { label: 'Audio', value: 'Sound setup and production audio for video and multi-camera workflows' },
    { label: 'Post-production', value: 'Premiere Pro (Advanced), After Effects, DaVinci Resolve, Final Cut Pro' },
    { label: 'Design & development', value: 'Photoshop, CorelDRAW, Final Draft, Microsoft Office' },
    { label: 'Drone', value: 'CAA-certified drone pilot' },
];

export const craftStatement =
    'My approach is grounded in both practical production experience and formal craft development. I trained in Advanced Cinema Editing at USC School of Cinematic Arts in partnership with Netflix under Oscar-winning editor Doug Blush, and have undertaken further training in post-production, editing, colour grading, cinematography, directing and film development.';

// ── TESTIMONIAL ─────────────────────────────────────────────
// Leave `quote` empty until Todimu supplies a real, approved quote
// with written permission. While empty, the collaboration statement shows.
export const testimonial = {
    quote: '',
    name: '',
    project: '',
    fallbackTitle: 'Good work is always a collaboration.',
    fallbackText:
        'Every project is built with the people who bring it to life — writers, directors, producers, crew, cast, clients and creative partners.',
};

// ── CONTACT ─────────────────────────────────────────────────
export const contact = {
    label: 'Fade out — Contact',
    titleLines: ['Let’s make', 'something that'],
    titleAccent: 'stays with you.',
    text: 'Have a story to tell, a project to develop or a production to bring to life? Get in touch. I’m available for selected film, television, documentary and branded-content collaborations.',
    cta: 'Send a project brief',
    projectTypes: ['Feature film', 'Television', 'Documentary', 'Branded / digital content', 'Education / NGO', 'Other'],
    success: 'Thank you for reaching out. Your project enquiry has been received.',
};