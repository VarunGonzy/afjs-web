import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const posts: Record<string, { title: string; date: string; author: string; category: string; readTime: string; image: string; excerpt: string; content: string }> = {
  "afjs-trust-the-story-behind-our-mission": {
    title: "AFJS Trust: The Story Behind Our Mission",
    date: "June 12, 2020", author: "John Dsouza", category: "Founder Story", readTime: "6 min",
    image: "/images/hero-community.jpg",
    excerpt: "Two childhood friends from Bhavnagar, a shared memory of hardship, and a decision to do something about it. This is how AFJS Trust was born.",
    content: `Every organisation begins with a moment. For AFJS Trust, that moment came on a summer afternoon in Bhavnagar, when I — John Dsouza — was walking past a lane I'd known since childhood, and I saw a girl, no older than eight, sorting through discarded plastic bottles instead of attending school.

**A Shared Beginning**

Varun Gonsalves and I grew up together in Bhavnagar. We played cricket in the same lanes, attended the same church, and watched the same children around us fall through the cracks of a system that was never built for them. Some of our own friends never made it past primary school — not because they weren't smart, but because their families couldn't afford the luxury of education when survival was the daily priority.

**The Distance That Brought Us Closer**

Varun moved to Germany years later. I stayed in Bhavnagar. The distance between us grew, but our conversations always came back to the same thing — the kids we'd grown up alongside who never got a fair chance.

It was during one of those late-night calls across time zones that we decided to stop talking about it and start doing something.

**All For Joyful Smiles**

The name AFJS — All For Joyful Smiles — came from a simple idea. Every child deserves to smile. Not the polite, uncomfortable smile of someone going through hardship, but the genuine, unguarded smile of a child who feels safe, fed, and hopeful.

We started small. A few children enrolled in school. A handful of nutrition drives. A WhatsApp group where we coordinated volunteers. But the need was immense, and the response was humbling.

**Why We Keep Going**

People sometimes ask me what drives me. The answer is simple: the smiles. The moment a child walks into class with a new uniform and new books and a full stomach — that moment is why AFJS Trust exists.`,
  },
  "breaking-cycle-child-labour-gujarat": {
    title: "Breaking the Cycle: Child Labour in Gujarat and What We Can Do",
    date: "September 8, 2020", author: "John Dsouza", category: "Advocacy", readTime: "5 min",
    image: "/images/education-group.jpg",
    excerpt: "Child labour robs children of their childhood and perpetuates generational poverty. Here's why education is the most powerful antidote.",
    content: `Gujarat is one of India's most industrialised states. It is also home to a troubling reality: thousands of children who work instead of attending school.

**The Scale of the Problem**

According to census data, Gujarat has one of the higher rates of child labour among Indian states, particularly in industries like textiles, agriculture, brick kilns, and small-scale manufacturing.

**The Poverty Trap**

Child labour and poverty form a vicious cycle. A family that cannot afford school fees or meals sends a child to work. That child grows up without education, finds only low-skill work, and their own children face the same predicament a generation later.

**What AFJS Trust Does**

We don't just enroll children in school and walk away. We work with families to understand their specific financial pressures and provide holistic support:

- Full school fee coverage removes the financial barrier to education
- Nutrition support means parents aren't forced to choose between feeding a child and sending them to school
- Family welfare counselling helps parents see education as an investment, not a luxury

**The Long Game**

Change in deeply entrenched social patterns takes time. But every child we enroll in school is one less child in a factory or a field.`,
  },
  "why-india-ngos-need-your-support": {
    title: "Why India's NGOs Need Your Support Now More Than Ever",
    date: "January 25, 2021", author: "John Dsouza", category: "Advocacy", readTime: "5 min",
    image: "/images/community-food.jpg",
    excerpt: "India's informal welfare system — its network of grassroots NGOs — is stretched thin. Here's why your support has never mattered more.",
    content: `India has over three million registered NGOs — one of the largest civil society sectors in the world. Yet most of them operate on shoestring budgets, dependent on a small circle of donors and volunteers.

**The Gap Government Cannot Fill**

India's government programmes for education and welfare are substantial, but implementation is uneven. In urban slums and rural communities, the last mile of delivery — reaching the children who need it most — often falls to local NGOs.

**What Stretches Us Thin**

The reality of running a small NGO in India includes: compliance requirements that take volunteer time away from programmes, donor fatigue that makes sustained funding difficult, and the challenge of reaching international donors who want to give but don't know trusted channels.

**What Your Support Does**

When you donate to AFJS Trust, you're not just giving money — you're sustaining the operational capacity of an organisation that would otherwise depend entirely on goodwill. Your rupees pay for school fees, meals, and the coordination that makes everything else possible.

Support an NGO today. The children it serves cannot wait.`,
  },
  "covid-impact-education-gujarat": {
    title: "How COVID Changed Education in Gujarat — And What We Did",
    date: "June 12, 2021", author: "John Dsouza", category: "Advocacy", readTime: "5 min",
    image: "/images/education-laptops.jpg",
    excerpt: "The pandemic set children back by years. Here's how AFJS Trust responded.",
    content: `The COVID-19 pandemic was, among many other things, an education catastrophe.

**The Learning Loss**

UNESCO estimates that school closures during COVID affected over 1.6 billion students worldwide. In India, school closures lasted longer than almost anywhere else. Children who were already behind — children without reliable internet, children in homes where studying was impossible, children who needed school meals to eat — fell further behind.

**What We Saw in Bhavnagar**

In the communities we serve, the pandemic's educational impact was severe. Children who had been making steady progress regressed. Parents who had been persuaded that education was worth the sacrifice began pulling children out permanently.

**Our Response**

We pivoted to home-based tutoring visits. Volunteers visited children directly, bringing learning materials and conducting small-group sessions in doorways and courtyards. We distributed notebooks and stationery so children could practice at home.

When schools reopened, we invested heavily in remedial support — intensive tutoring to help children catch up on lost time.

The crisis showed us that education support must be resilient, community-embedded, and ready to adapt. We came out of COVID with a stronger model than we went in with.`,
  },
  "education-dropout-prevention": {
    title: "Preventing School Dropout: Our Early Warning System",
    date: "October 10, 2021", author: "John Dsouza", category: "Education", readTime: "4 min",
    image: "/images/education-group.jpg",
    excerpt: "We identify at-risk children before they drop out. Here's the system we've built.",
    content: `The hardest thing about school dropout is that it rarely happens suddenly. It happens gradually — a few missed days, then a week, then a month. By the time it's visible, the child is already gone.

**Our Early Warning Approach**

We track attendance closely for every child in our programme. A child who misses more than two consecutive days without explanation triggers a home visit from a volunteer mentor.

These visits often reveal the real reason: a family crisis, an illness, a parent who's been laid off and needs the child to help with income. By addressing the root cause early, we can often prevent the dropout from becoming permanent.

**What We've Found**

The most common precursors to dropout are:

- Family economic shock (sudden loss of income)
- Illness of a parent or sibling that requires the child to stay home
- Peer or family pressure on girls to reduce "unnecessary" activities like school
- Loss of confidence after academic struggles

**Our Intervention**

Once we identify a child at risk, we work with the family to understand what they need. Sometimes it's emergency financial support. Sometimes it's reassurance. Sometimes it's connecting the family with government welfare schemes they didn't know they qualified for.

Early intervention works. Our dropout rate is under 5%.`,
  },
  "girl-empowerment-why-it-matters": {
    title: "Girl Empowerment Through Education: Why It Changes Everything",
    date: "August 14, 2022", author: "John Dsouza", category: "Education", readTime: "5 min",
    image: "/images/girl-empowerment-2.jpg",
    excerpt: "Educating a girl doesn't just change her life — it changes her family, community, and the next generation.",
    content: `There is a reason that international development organisations consistently identify girls' education as the single highest-return investment in human development.

**The Multiplier Effect**

When a girl stays in school:

- Her children are 50% more likely to survive past age 5
- Her family's income increases by 10–20% for each additional year of schooling
- She is far less likely to marry before 18
- Her own daughters are more likely to attend school

These are not aspirational claims. They are documented outcomes from decades of research across multiple countries.

**The Barriers We Face**

In the communities we serve, the barriers to girls' education are specific and persistent: economic pressure to contribute domestic labour, early marriage as financial strategy, safety concerns on the way to school, and deeply held beliefs that education is less necessary for girls.

**What AFJS Trust Does Differently**

We don't just provide scholarships. We work with the entire family. We run awareness sessions with parents. We pair girls with female mentors who have navigated similar pressures. We create safe community spaces where girls can study together and build confidence.

Education is not just a right. For girls, it is a lifeline — for themselves, and for the generations they will raise.`,
  },
  "how-your-donation-educates": {
    title: "How Your Donation Educates a Child in India",
    date: "May 3, 2022", author: "John Dsouza", category: "Donors Guide", readTime: "4 min",
    image: "/images/education-laptops.jpg",
    excerpt: "Ever wondered exactly where your money goes? Here's the complete breakdown.",
    content: `Transparency matters. When you donate to AFJS Trust, you deserve to know exactly what your money does.

**₹25,000 — One Child's Full Year**

Here is how a full-year sponsorship is spent:

- **School Fees** (paid directly to St. Xavier's Primary School): ₹12,000–14,000
- **Books, Notebooks, and Stationery**: ₹2,000–3,000
- **School Uniform** (2 sets, shoes, bag): ₹2,500–3,000
- **After-School Tutoring** (operational costs): ₹2,000
- **Nutrition Support**: ₹3,000–4,000
- **Administrative and coordination costs**: less than 5%

**Smaller Donations**

- ₹100 buys a child's notebooks and stationery for a week
- ₹500 provides nutritious meals for two weeks
- ₹1,000 covers a full month of meal support
- ₹2,500 provides all school supplies for a semester

**What We Don't Spend On**

We do not have corporate offices, expensive branding, or large paid staff. Our model is volunteer-heavy by design. That means more of every rupee you give reaches the children directly.

Donate with confidence. Your money is going where it matters.`,
  },
  "diaspora-giving-guide": {
    title: "The NRI's Guide to Giving Back to India",
    date: "February 28, 2022", author: "John Dsouza", category: "Donors Guide", readTime: "5 min",
    image: "/images/hero-community.jpg",
    excerpt: "Millions of Indians abroad want to support their home country. Here's how to do it right.",
    content: `Millions of Indians living abroad carry a deep connection to their homeland — and a desire to give back. But giving back effectively requires navigating some practical realities.

**Find Trustworthy Channels**

The biggest challenge for diaspora donors is trust. There are thousands of Indian NGOs, and not all of them are transparent or effective. Look for organisations with:

- Darpan registration (India's national NGO registry)
- Clear financial reporting
- Personal connections — ideally, you or someone you know can vouch for the people running it

AFJS Trust is registered under Darpan Reg: GJ/2025/0719739. Our founders — John Dsouza in Bhavnagar and Varun Gonsalves in Germany — are personally accountable for every rupee.

**How to Donate Internationally**

Our Razorpay gateway accepts international Visa, Mastercard, and Amex cards. For larger donations, WhatsApp us for bank transfer details.

**Tax Considerations**

Tax deductibility for donations to Indian NGOs varies by country. In India, donations to AFJS Trust may qualify for 80G deductions. For international donors, consult your local tax advisor.

**The Personal Connection**

The most effective diaspora giving is personal. Consider sponsoring a specific child — you'll receive updates on their progress, and you'll know that your money is making a direct, traceable difference.`,
  },
  "nutrition-learning-connection": {
    title: "Nutrition and Learning: Why a Full Stomach Means a Better Future",
    date: "November 18, 2022", author: "John Dsouza", category: "Education", readTime: "5 min",
    image: "/images/nutrition-kids-2.jpg",
    excerpt: "The science is unambiguous: hungry children cannot learn. Here's what we're doing about it.",
    content: `The connection between nutrition and learning is one of the best-established findings in developmental science.

**What the Research Shows**

Children who are chronically undernourished show measurable differences in:

- Cognitive development and working memory
- Attention span and classroom concentration
- Academic performance across all subjects
- Long-term educational attainment

These are not small effects. Hunger is a genuine cognitive impairment.

**What We See in Practice**

In Bhavnagar's underprivileged communities, many children arrive at school — when they arrive — having eaten little or nothing. The impact on their ability to concentrate is visible and immediate.

**Our Nutrition Drives**

We organise 4+ nutrition drives per month across Bhavnagar and Ahmedabad. Volunteers prepare and distribute hot, wholesome meals — dal, rice, vegetables, and fruit when available. The drives are community events, not charity queues. Families gather. Children play. The atmosphere is one of care, not shame.

**The Bigger Picture**

Nutrition support does more than feed children. It gives parents one less reason to keep children home. It builds community trust in AFJS Trust. And it means that when a child sits down to learn, they can actually learn.

₹1,000 provides a child's meals for an entire month. That's the cost of learning.`,
  },
  "family-welfare-invisible-crisis": {
    title: "Family Welfare: The Invisible Crisis Behind Child Poverty",
    date: "March 5, 2023", author: "John Dsouza", category: "Advocacy", readTime: "5 min",
    image: "/images/family-welfare-1.jpg",
    excerpt: "Helping a child means helping their whole family. Here's why family welfare is central to our work.",
    content: `When we talk about helping underprivileged children, we often talk about schools, books, and meals. These things are essential. But there's a layer of the problem that's rarely discussed: the family circumstances that make education difficult in the first place.

**The Hidden Crises**

In our work with families, we regularly encounter situations that aren't visible from the outside:

- Domestic situations where women are afraid to seek help
- Elderly grandparents who are the sole caregivers for young children
- Families where the primary earner has a disability that prevents regular employment
- Chronic illness that drains whatever small savings a household had built up

**A Whole-Family Approach**

A child cannot thrive in a broken home. When we support a family — not just a child — we create the conditions in which all our other work is sustainable. The education we fund is more likely to stick. The nutrition we provide is part of a broader recovery.

Family welfare is not charity. It is long-term investment in communities.`,
  },
  "five-ways-help-without-donating": {
    title: "5 Powerful Ways to Help AFJS Trust Without Donating Money",
    date: "December 12, 2023", author: "John Dsouza", category: "Community", readTime: "4 min",
    image: "/images/education-laptops.jpg",
    excerpt: "Not everyone can donate. But everyone can help. Here are five high-impact ways to support our work that don't require opening your wallet.",
    content: `We believe in removing every barrier to supporting children's education. And that includes the barrier of money.

**1. Share Our Story**

The most underrated thing you can do for any NGO is amplify its reach. Share our posts on Instagram (@afjs_charitable_trust). Forward this blog to someone who might care. Word-of-mouth is how small organisations grow.

**2. Volunteer Your Skills**

Are you a teacher, accountant, designer, or marketer? We need skills, not just hands. Remote volunteers have helped us with everything from financial reporting to social media content.

**3. Connect Us With Potential Donors**

Do you know someone who donates to charities? Make an introduction. A personal referral from a trusted friend is worth more than any advertisement.

**4. Write a Review or Testimonial**

If you've donated or volunteered with us, sharing your experience publicly helps build the trust that encourages others to do the same.

**5. Follow and Engage on Instagram**

Every like, comment, and share on @afjs_charitable_trust increases our reach. It costs nothing and takes seconds.

Help doesn't always look like money. Sometimes it looks like a share, a referral, or an hour of your time.`,
  },
  "sponsoring-a-child-what-it-means": {
    title: "What It Really Means to Sponsor a Child Through AFJS Trust",
    date: "June 19, 2023", author: "John Dsouza", category: "Donors Guide", readTime: "4 min",
    image: "/images/education-group.jpg",
    excerpt: "Sponsoring a child's education is more than a transaction. Here's the full story of what your ₹25,000 actually does.",
    content: `Child sponsorship has become a well-known concept in international development. But what does it actually mean when you sponsor a child through AFJS Trust?

**What ₹25,000 Covers**

When you commit to sponsoring a child for ₹25,000 per year, here is how that investment is used:

- **School Fees** paid directly to St. Xavier's Primary School: ₹12,000–14,000
- **Books, Notebooks, and Stationery**: ₹2,000–3,000
- **School Uniform** (2 sets, shoes, bag): ₹2,500–3,000
- **After-School Tutoring**: ₹2,000
- **Nutrition Support**: ₹3,000–4,000
- **Administrative costs**: less than 5%

**What You Won't Get**

We want to be honest: AFJS Trust is a small, early-stage organisation. We do not yet offer formal "meet your child" programmes. Privacy concerns for children and families mean we operate differently.

What we do offer is full transparency — photos from our programmes, regular impact updates, and direct communication via WhatsApp.

**The Commitment We Make**

When you sponsor a child, we commit to enrolling and maintaining their school attendance, providing all educational materials, regular check-ins on progress, and a full year-end impact report.

Your ₹25,000 is not a donation. It is a partnership.`,
  },
  "from-germany-with-love": {
    title: "From Germany With Love: How Varun Supports AFJS Trust from Abroad",
    date: "September 30, 2023", author: "John Dsouza", category: "Founder Story", readTime: "5 min",
    image: "/images/impact-donation.jpg",
    excerpt: "Varun Gonsalves grew up in Bhavnagar, moved to Germany, and never stopped caring about the children he left behind.",
    content: `When Varun Gonsalves moved to Germany, he carried Bhavnagar with him.

Not just in memory — in the daily weight of knowing that the children he'd grown up alongside were still navigating a world that hadn't gotten any easier.

**A Different Kind of Distance**

Varun and I have been friends since childhood. We attended the same church, played in the same lanes, and shared a front-row view of the inequality that runs through Bhavnagar's communities.

When Varun moved to Germany for work, that shared history didn't dissolve. If anything, distance made it sharper.

**What Distance Makes Possible**

There are things Varun can do from Germany that I cannot do from Bhavnagar. He has been instrumental in:

- **Connecting AFJS Trust with the Indian diaspora in Europe**: Many NRIs want to give back but don't know trustworthy channels. Varun is that personal connection.
- **Raising awareness internationally**: The story of an Indian NGO, told by someone who grew up there and now lives in Europe, resonates with audiences our social media alone cannot reach.
- **Providing strategic and financial support**: Varun has personally contributed to our funding in the early, difficult months when every rupee mattered enormously.

**What He Tells People**

When Varun talks about AFJS Trust, he doesn't use the language of charity. He talks about responsibility. He says: "These are our people. These are the kids from our lanes. We didn't escape poverty — we were lucky."

That perspective is the soul of what we do.`,
  },
  "mental-health-children-poverty": {
    title: "The Hidden Crisis: Mental Health and Children Growing Up in Poverty",
    date: "October 15, 2025", author: "John Dsouza", category: "Advocacy", readTime: "5 min",
    image: "/images/education-group.jpg",
    excerpt: "Poverty is not just a material condition. The psychological toll on children is real, measurable, and deeply underaddressed in India.",
    content: `When we talk about supporting underprivileged children, we typically talk about school fees, books, and meals. These things are essential. But there is a dimension of children's wellbeing that is almost never discussed: mental health.

**The Psychology of Poverty**

Research in developmental psychology has established clearly that chronic poverty generates chronic stress — in adults and in children. The uncertainty of not knowing where the next meal comes from, the shame of not having what peers have — these are not background noise. They are foreground experiences that shape a child's developing brain.

Children raised in chronic stress show measurable differences in:

- Cognitive development and working memory
- Emotional regulation — the ability to manage feelings and impulses
- Social bonding and trust in adults
- Academic performance, not because of reduced intelligence, but because of reduced cognitive bandwidth

**What We See in Practice**

In the children we work with, we see these patterns regularly. A child who cannot sit still in class is not being disruptive — they may be responding to a chaotic home environment.

Our volunteer tutors are trained to recognise and respond to these signs. We work with a simple but powerful principle: **safety first**. A child who feels safe in our after-school space can begin to learn.

We cannot address the root causes of poverty overnight. But we can provide safe havens within it.`,
  },
  "science-of-hope-community-support": {
    title: "The Science of Hope: How Community Support Transforms Outcomes",
    date: "January 10, 2026", author: "John Dsouza", category: "Advocacy", readTime: "4 min",
    image: "/images/community-food.jpg",
    excerpt: "Research shows that social support is as predictive of educational outcomes as family income. Community is not a soft concept — it is a hard intervention.",
    content: `We use the word "community" so often that it risks losing its meaning. But in development work, community is not a soft, feel-good concept. It is a hard, empirically validated intervention that changes outcomes.

**What the Research Shows**

Studies in educational psychology consistently find that social support — from teachers, mentors, peers, and community members — is one of the strongest predictors of academic success, independent of family income.

Children who feel they belong, who feel seen by at least one trusted adult, perform significantly better in school. They attend more regularly. They are more resilient when things go wrong.

**What We Build**

Every element of AFJS Trust's work is designed to create belonging. Our after-school sessions are not just tutoring — they are spaces where children experience consistency, warmth, and care. Our nutrition drives are community events, not charity queues. Our family welfare sessions build relationships, not just deliver services.

**The Ripple Effect**

When a child feels supported by a community, they become part of that community's culture of support. They grow up to support others. Hope, it turns out, is not a soft aspiration. It is an infrastructure — and we are building it, one child at a time.`,
  },
  "how-to-donate-from-usa-uk-eu": {
    title: "How to Donate to an Indian NGO from the US, UK, or EU",
    date: "February 10, 2026", author: "John Dsouza", category: "Donors Guide", readTime: "5 min",
    image: "/images/hero-community.jpg",
    excerpt: "Living abroad but want to support children in India? Here's your complete guide.",
    content: `Many of our most generous supporters live outside India — in the US, UK, and across Europe. If you're an Indian diaspora member or simply someone moved by the cause, here's how you can donate from abroad.

**Option 1: Online via Razorpay (Easiest)**

Our Razorpay payment gateway accepts international debit and credit cards (Visa, Mastercard, Amex). Simply visit joyfullsmiles.org/donate, select your amount, and pay with your international card.

Note: International card payments may attract a small currency conversion fee from your bank.

**Option 2: WhatsApp Us for Bank Transfer**

For larger donations or if you prefer a direct bank transfer, WhatsApp us at +91 63573 69174. We'll provide our bank account details for NEFT/SWIFT transfers.

**Is It Tax Deductible?**

In India, donations qualify for 80G deductions. For donors in the US, UK, or EU, tax deductibility depends on your country's rules and any applicable tax treaties. Please consult your local tax advisor.

**Why Donate to AFJS Trust?**

We are a small, grassroots organisation with minimal overhead, personal accountability from our founders, and a track record of direct impact in Bhavnagar and Ahmedabad. Your money goes to children — not to offices or executives.

We would love to have you as part of our community. Reach out on WhatsApp and we'll make it personal.`,
  },
  "section-80g-tax-exemption-india": {
    title: "Section 80G Tax Exemption: Save Tax While Changing Lives",
    date: "February 20, 2026", author: "John Dsouza", category: "Donors Guide", readTime: "6 min",
    image: "/images/impact-donation.jpg",
    excerpt: "Your donation to a registered Indian NGO can save you in tax. Here's how Section 80G works.",
    content: `One of the most underutilized benefits for Indian taxpayers is the Section 80G deduction.

**What is Section 80G?**

Section 80G of the Income Tax Act, 1961 allows donors to deduct donations made to registered NGOs from their taxable income. Depending on the organisation's registration, you may claim 50% or 100% of the donated amount as a deduction.

**How Much Can You Save?**

If you're in the 30% tax bracket and donate ₹10,000, you save ₹1,500 in tax (on a 50% deduction). The actual cost of your ₹10,000 donation is just ₹8,500.

**AFJS Trust's Registration**

AFJS Charitable Trust is registered under:

- Darpan Registration: GJ/2025/0719739
- PAN: AALTA7481L
- Trust Registration: F/3788/Bhavnagar

For the most current 80G certificate and to request your official tax receipt, please contact us at Afjs.charitable@gmail.com or WhatsApp +91 63573 69174.

**How to Claim**

1. Donate online via our Razorpay gateway
2. Request your 80G certificate and donation receipt from us
3. Include the donation under Section 80G deductions when filing your ITR
4. Save your receipt for at least 6 years

Donating is now more rewarding than ever — you help a child, and your government helps you.`,
  },
  "education-girl-child-india-2026": {
    title: "The State of Girl Child Education in India: 2026 Update",
    date: "January 28, 2026", author: "John Dsouza", category: "Advocacy", readTime: "6 min",
    image: "/images/girl-empowerment-1.jpg",
    excerpt: "The data is clear — educating girls produces the highest returns of any development investment.",
    content: `The numbers are stark. In India, approximately 40% of girls drop out of school before completing secondary education. In Gujarat's underprivileged communities, this number is even higher.

**Why Girls Drop Out**

The reasons are complex and interconnected: economic pressure on families, early marriage, lack of safety on the way to school, and deep-rooted cultural beliefs that education is less important for girls.

**The Multiplier Effect**

But here's what the data shows: educating girls is the single highest-return investment in human development. When a girl stays in school:

- Her children are 50% more likely to survive past age 5
- Her family's income increases by 10–20% for each additional year of schooling
- She is far less likely to marry before 18
- Her own daughters are more likely to attend school

**What AFJS Trust Does**

Our Girl Empowerment program specifically identifies girls at the highest risk of dropping out. We provide full educational scholarships, female mentors who serve as role models, confidence and life-skills workshops, family engagement sessions, and safe community spaces.

Since our program began, we have supported over 150 girls in Bhavnagar and Ahmedabad. Many have gone on to pursue secondary education — a pathway their mothers never had.`,
  },
  "afjs-trust-year-three": {
    title: "Year Three: Milestones, Mistakes, and What Comes Next",
    date: "August 5, 2025", author: "John Dsouza", category: "Founder Story", readTime: "6 min",
    image: "/images/impact-donation.jpg",
    excerpt: "A candid look at our third year — what we built, what we broke, and what we're building next.",
    content: `Three years in, I'm in a reflective mood. AFJS Trust is still small by most measures. But the things we've learned in three years would fill a book.

**What We Built**

We established a stable partnership with St. Xavier's Primary School in Bhavnagar — a relationship that gives our education programme a real institutional foundation. We scaled our nutrition drives to 4+ per month. We brought Varun's diaspora network into our donor base in a meaningful way.

Most importantly, we built trust. In the communities we serve, trust is the hardest thing to build and the most valuable thing to have.

**What We Learned**

We underestimated the administrative burden of running a registered charitable trust. Compliance, documentation, and reporting require time and expertise that volunteer-run organisations often lack.

We also underestimated the difficulty of communicating our impact to potential donors. The work we do is human, not statistical. But donors need numbers. We've invested in building better documentation systems.

**What Comes Next**

We are focused on three things for the next year:

1. Deepening our programs — more children, more consistently
2. Building a more robust volunteer and donor communication system
3. Expanding our presence in Ahmedabad to reach more communities

Thank you for being part of this journey.`,
  },
  "volunteering-with-afjs": {
    title: "What It's Really Like to Volunteer With AFJS Trust",
    date: "June 30, 2025", author: "John Dsouza", category: "Community", readTime: "4 min",
    image: "/images/education-laptops.jpg",
    excerpt: "Six volunteers share what surprised them most about working in Bhavnagar's communities.",
    content: `We asked six of our volunteers a simple question: what surprised you most about volunteering with AFJS Trust? Their answers were honest, specific, and sometimes unexpected.

**"The children are so eager"**

"I expected to encounter resistance — children who'd been so discouraged that they didn't want to learn anymore. What I found was the opposite. The hunger for attention, for learning, for someone to sit with them and explain something — it's overwhelming." — Tutoring volunteer, Bhavnagar

**"The families are not passive"**

"I'd assumed we'd be doing something for communities. What I found was that we were doing something with them. Parents showed up. They asked questions. They wanted to be involved." — Family welfare volunteer

**"It's harder than it looks"**

"The logistics of running a nutrition drive — sourcing food, coordinating volunteers, managing quantities, distributing fairly — is real work. It's not glamorous. But it's essential." — Nutrition drive coordinator

**"One child changes everything"**

"There's one girl I've been tutoring for eight months. Watching her go from barely reading to writing full paragraphs — that's why I keep coming back." — Long-term tutor

**How to Get Involved**

WhatsApp us at +91 63573 69174 or email Afjs.charitable@gmail.com. We welcome tutors, mentors, coordinators, and anyone willing to show up consistently.`,
  },
  "st-xaviers-school-partnership": {
    title: "Our Partnership With St. Xavier's Primary School",
    date: "April 22, 2025", author: "John Dsouza", category: "Education", readTime: "5 min",
    image: "/images/education-group.jpg",
    excerpt: "St. Xavier's is more than a venue. It's the foundation of everything we do in child education.",
    content: `Every programme needs a foundation. For our child education work, that foundation is St. Xavier's Primary School in Devbagh, Bhavnagar.

**Why St. Xavier's**

St. Xavier's is a respected institution with a long history of serving the communities around Devbagh. When we began exploring where to enroll our sponsored children, St. Xavier's was the clear choice: strong academic standards, experienced teachers, and a genuine commitment to inclusive education.

**What the Partnership Looks Like**

AFJS Trust pays school fees directly to St. Xavier's on behalf of sponsored children. This isn't a voucher system — it's a direct financial commitment that gives the school confidence in our enrolments.

Beyond fees, we provide the supplementary support that makes the school placement stick: after-school tutoring in our community space, regular check-ins with teachers on each child's progress, and parent engagement to ensure families stay invested.

**The Results**

The academic report card we shared on our Impact page — 84.14%, PASS, Semester 1 of Academic Year 2025–26 — is from a child enrolled through this partnership. That result didn't happen by accident. It happened because a child had school fees paid, books in hand, a uniform on their back, meals in their stomach, and a tutor who cared.

That's what ₹25,000 does. That's the partnership.`,
  },
  "nutrition-drive-december-2025": {
    title: "December Nutrition Drive: 300 Meals, One Weekend",
    date: "December 20, 2025", author: "John Dsouza", category: "Events", readTime: "3 min",
    image: "/images/nutrition-kids-1.jpg",
    excerpt: "Last weekend, our volunteers served 300 meals across two locations in Bhavnagar. Here's how it went.",
    content: `Last weekend, twelve volunteers gathered at 7am in Bhavnagar. By 2pm, 300 meals had been cooked, packaged, and distributed across two locations in the city.

**The Logistics**

We split into two teams — one at our regular location near Devbagh, one at a new location we've been building relationships with in Vidhyanagar. Each team had a coordinator, three cooks, and three distribution volunteers.

The menu was simple and nutritious: dal, rice, sabzi, and fruit. Nothing elaborate. Just food that fills a stomach and gives a body what it needs.

**The Moment That Stays With Me**

A woman came through the line with three children under seven. The youngest was barely walking. She took the food, turned to her children, and said something I couldn't hear. The children sat down cross-legged on the ground right there and started eating immediately.

That's why we do this.

**What It Cost**

The entire December drive cost approximately ₹18,000 — ₹60 per meal, including ingredients, packaging, and volunteer coordination. If you want to sponsor a future drive, WhatsApp us.

Thank you to every donor who made December possible. See you in January.`,
  },
  "afjs-trust-five-years": {
    title: "Five Years of AFJS Trust: What We've Learned",
    date: "March 15, 2026", author: "John Dsouza", category: "Founder Story", readTime: "6 min",
    image: "/images/impact-donation.jpg",
    excerpt: "Five years in, we look back at what worked, what didn't, and what drives us forward.",
    content: `Five years ago, Varun and I made a decision on a late-night phone call. We were going to stop talking about the problem and start doing something about it.

Five years later, here's what I know.

**What Worked**

Consistency. The single most important thing we did was show up — week after week, drive after drive, tutoring session after tutoring session. Trust in communities is built through reliability, not intensity. A hundred small consistent actions outperform ten dramatic gestures.

Partnerships. Our relationship with St. Xavier's Primary School gave our education programme a credibility and structure it couldn't have had otherwise. Find your partners and invest in those relationships.

Personal connection. Every donor who has stayed with us for more than one year has a personal connection — to one of us, to a volunteer, to a child. The transactional donation is fragile. The relationship-based donation is durable.

**What Didn't Work**

Trying to do everything. In year one, we attempted programmes in four cities simultaneously with ten volunteers. Nothing was done well. We pulled back, focused on Bhavnagar, did the work properly, and then expanded. Focus first.

**What Drives Us Forward**

A girl in 7th grade who almost didn't make it to 4th. A boy who got 84% in his semester exams. A mother who told us that for the first time in her life, she believed her daughter would finish school.

Five years. Thousands of meals. Hundreds of children. One mission. Let's keep going.`,
  },
};

export async function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, images: [post.image], type: "article" },
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts[slug];
  if (!post) notFound();

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: `https://joyfullsmiles.org${post.image}`,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: "Founder & Secretary, AFJS Charitable Trust",
    },
    publisher: {
      "@type": "Organization",
      name: "AFJS Trust",
      logo: { "@type": "ImageObject", url: "https://joyfullsmiles.org/images/logo-icon.jpg" },
    },
  };

  const paragraphs = post.content.split("\n\n");

  function renderInline(text: string) {
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return parts.map((part, i) =>
      i % 2 === 1 ? <strong key={i} className="font-semibold text-gray-900">{part}</strong> : part
    );
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <div className="relative h-64 md:h-80 overflow-hidden mt-16">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 right-6">
          <span className="inline-block px-3 py-1 bg-teal-500 text-white text-xs font-bold rounded-full mb-2">{post.category}</span>
          <h1 className="text-2xl md:text-3xl font-extrabold text-white">{post.title}</h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 text-sm text-gray-400 mb-8 pb-6 border-b border-gray-100">
          <span>{post.date}</span><span>·</span><span>{post.readTime} read</span><span>·</span><span>By {post.author}</span>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-5">
          {paragraphs.map((p, i) => {
            if (p.startsWith("**") && p.endsWith("**") && !p.slice(2, -2).includes("**")) {
              return <h2 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-3">{p.replace(/\*\*/g, "")}</h2>;
            }
            if (p.startsWith("- ") || p.match(/^\d+\./)) {
              const items = p.split("\n").filter(l => l.match(/^[-\d]/));
              return <ul key={i} className="list-none space-y-1.5">{items.map((item, j) => <li key={j} className="flex gap-2 items-start"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" /><span>{renderInline(item.replace(/^-\s|^\d+\.\s/, ""))}</span></li>)}</ul>;
            }
            return <p key={i}>{renderInline(p)}</p>;
          })}
        </div>

        <div className="mt-10 p-6 bg-teal-950 rounded-2xl flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-lg shrink-0">JD</div>
          <div>
            <p className="font-bold text-white">{post.author}</p>
            <p className="text-teal-300 text-sm">Founder &amp; Secretary, AFJS Charitable Trust · Bhavnagar, Gujarat</p>
            <p className="text-gray-400 text-sm mt-1 leading-relaxed">John Dsouza grew up in Bhavnagar and founded AFJS Trust after witnessing the hardships of underprivileged children in his hometown. He leads all day-to-day operations and programme delivery.</p>
          </div>
        </div>

        <div className="mt-8 p-6 bg-coral-50 rounded-2xl text-center">
          <p className="font-bold text-gray-900 mb-2">Inspired by this story?</p>
          <p className="text-gray-600 text-sm mb-4">₹25,000 sponsors one child&apos;s full year of education.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/donate" className="px-6 py-3 bg-coral-400 hover:bg-coral-500 text-white font-bold rounded-full transition-colors">Donate Now</Link>
            <Link href="/blog" className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-bold rounded-full border border-gray-200 transition-colors">More Stories</Link>
          </div>
        </div>
      </div>
    </>
  );
}
