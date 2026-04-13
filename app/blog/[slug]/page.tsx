import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

const posts: Record<string, {
  title: string; date: string; author: string; category: string; readTime: string;
  image: string; excerpt: string; content: string;
}> = {
  "afjs-trust-the-story-behind-our-mission": {
    title: "AFJS Trust: The Story Behind Our Mission",
    date: "June 12, 2020",
    author: "John Dsouza",
    category: "Founder Story",
    readTime: "6 min",
    image: "/images/hero-community.jpg",
    excerpt: "Two childhood friends from Bhavnagar, a shared memory of hardship, and a decision to do something about it. This is how AFJS Trust was born.",
    content: `Every organisation begins with a moment. For AFJS Trust, that moment came on a summer afternoon in Bhavnagar, when I — John Dsouza — was walking past a lane I'd known since childhood, and I saw a girl, no older than eight, sorting through discarded plastic bottles instead of attending school.

I'd grown up in this city. I'd seen poverty. But that afternoon, something shifted in me.

**A Shared Beginning**
Varun Gonsalves and I grew up together in Bhavnagar. We played cricket in the same lanes, attended the same church, and watched the same children around us fall through the cracks of a system that was never built for them. Some of our own friends never made it past primary school — not because they weren't smart, but because their families couldn't afford the luxury of education when survival was the daily priority.

We never forgot those children. We just grew up, moved on, and carried the memory with us.

**The Distance That Brought Us Closer**
Varun moved to Germany years later. I stayed in Bhavnagar. The distance between us grew, but our conversations always came back to the same thing — the kids we'd grown up alongside who never got a fair chance.

It was during one of those late-night calls across time zones that we decided to stop talking about it and start doing something.

**All For Joyful Smiles**
The name AFJS — All For Joyful Smiles — came from a simple idea. Every child deserves to smile. Not the polite, uncomfortable smile of someone going through hardship, but the genuine, unguarded smile of a child who feels safe, fed, and hopeful.

We started small. A few children enrolled in school. A handful of nutrition drives. A WhatsApp group where we coordinated volunteers. But the need was immense, and the response — from donors in India and abroad, from volunteers in Bhavnagar, from families who trusted us — was humbling.

**Why We Keep Going**
People sometimes ask me what drives me. The answer is simple: the smiles. The moment a child walks into class with a new uniform and new books and a full stomach — that moment is why AFJS Trust exists.

We are not a large organisation. We don't have a corporate office or a team of hundreds. We are two friends from Bhavnagar who believed that doing something small, done consistently and with heart, can change lives.

And it does.`,
  },
  "breaking-cycle-child-labour-gujarat": {
    title: "Breaking the Cycle: Child Labour in Gujarat and What We Can Do",
    date: "September 8, 2020",
    author: "John Dsouza",
    category: "Advocacy",
    readTime: "5 min",
    image: "/images/education-group.jpg",
    excerpt: "Child labour robs children of their childhood and perpetuates generational poverty. Here's why education is the most powerful antidote.",
    content: `Gujarat is one of India's most industrialised states. It is also home to a troubling reality: thousands of children who work instead of attending school.

**The Scale of the Problem**
According to census data, Gujarat has one of the higher rates of child labour among Indian states, particularly in industries like textiles, agriculture, brick kilns, and small-scale manufacturing. Many of these children work alongside their parents — not because families are careless, but because they have no choice.

**The Poverty Trap**
Child labour and poverty form a vicious cycle. A family that cannot afford school fees or meals sends a child to work. That child grows up without education, finds only low-skill work, and their own children face the same predicament a generation later.

Breaking this cycle requires intervention at multiple levels. Education, nutrition, and family welfare support must work together.

**What AFJS Trust Does**
We don't just enroll children in school and walk away. We work with families to understand their specific financial pressures and provide holistic support:
- Full school fee coverage removes the financial barrier to education
- Nutrition support means parents aren't forced to choose between feeding a child and sending them to school
- Family welfare counselling helps parents see education as an investment, not a luxury

**The Long Game**
Change in deeply entrenched social patterns takes time. But every child we enroll in school is one less child in a factory or a field. Every girl we keep in education is one who won't be married off at 14. Every meal we provide is one less reason for a family to pull a child out of class.

We are playing the long game — because children deserve nothing less.`,
  },
  "why-india-ngos-need-your-support": {
    title: "Why India's NGOs Need Your Support Now More Than Ever",
    date: "January 25, 2021",
    author: "John Dsouza",
    category: "Advocacy",
    readTime: "5 min",
    image: "/images/community-food.jpg",
    excerpt: "India's informal welfare system — its network of grassroots NGOs — is stretched thin. Here's why your support has never mattered more.",
    content: `India has over three million registered NGOs — one of the largest civil society sectors in the world. Yet most of them operate on shoestring budgets, dependent on a small circle of donors and volunteers. The work they do is irreplaceable. And it is increasingly under strain.

**The Funding Gap**
Government welfare schemes, while well-intentioned, often fail to reach the last mile — the most marginalised families in the most remote or underserved communities. NGOs fill this gap. But they do it without guaranteed funding, without institutional backing, and often without recognition.

**Why Grassroots Matters**
The advantage of a small, community-based NGO like AFJS Trust is proximity. We know the families we serve. We know which children have stopped coming to class, and why. We know which mother is struggling to feed her children, and we can respond within days — not months.

Large institutional programmes cannot match this speed or intimacy. What we lack in resources, we make up for in trust and presence.

**Post-Pandemic Reality**
The COVID-19 pandemic devastated India's informal economy. Millions of daily wage workers lost their livelihoods overnight. Children who had just begun attending school were pulled back into labour or domestic work. The recovery has been slow and uneven — and the children in communities like ours are still paying the price.

**What Your Support Does**
When you donate to AFJS Trust, you are not giving to a faceless institution. You are supporting a team of dedicated individuals in Bhavnagar who wake up every day determined to make a difference.

Your ₹1,000 buys meals for a month. Your ₹25,000 sponsors a child's full year of school. Your WhatsApp message of encouragement reminds us why we do this.

India's children deserve better. You can help make that happen.`,
  },
  "school-dropout-crisis-rural-india": {
    title: "The School Dropout Crisis in Rural India — And How We're Fighting It",
    date: "April 14, 2021",
    author: "John Dsouza",
    category: "Education",
    readTime: "5 min",
    image: "/images/education-laptops.jpg",
    excerpt: "Millions of children in rural India drop out before completing secondary education. The reasons are complex — and solvable.",
    content: `India has made remarkable progress in school enrolment over the past two decades. But enrolment is not the same as completion. Millions of children who begin school never finish it.

**The Numbers**
Studies suggest that while primary school enrolment in India is close to universal, dropout rates spike sharply between grades 5 and 8. In rural and semi-urban areas, many children exit the school system long before they acquire functional literacy or numeracy.

**The Reasons Children Drop Out**
The causes of dropout are rarely simple. They include:
- Economic pressure: children are needed to contribute to family income
- Distance and safety: long distances to school, especially for girls, create real barriers
- Low perceived return: families who have never seen education pay off struggle to invest in it
- Classroom quality: overcrowded, under-resourced classrooms fail to engage children
- Social factors: caste discrimination, early marriage, and peer pressure

**The First-Generation Learner Challenge**
Many children we support are first-generation learners — the first in their families to attend school. There is no homework help at home, no older sibling who navigated the school system, no parent who can explain what the textbook says. This invisible disadvantage compounds over time.

**Our Response**
AFJS Trust addresses dropout risk through a multi-pronged approach:
- After-school tutoring for children falling behind
- Regular home visits to identify early warning signs
- Family engagement sessions that build parental confidence in education
- Mentorship by older students and community leaders
- Financial support that removes economic barriers

**The Turning Point**
Every child we prevent from dropping out is a victory — not just for that child, but for their family and community. Education is not just knowledge. It is the foundation of every other right.`,
  },
  "diwali-with-the-children": {
    title: "Diwali With the Children: Joy That Cannot Be Bought",
    date: "November 4, 2021",
    author: "John Dsouza",
    category: "Events",
    readTime: "3 min",
    image: "/images/nutrition-kids-2.jpg",
    excerpt: "This Diwali, we celebrated with 80 children and their families in Bhavnagar. Here's what happened when light met laughter.",
    content: `Every year, the festival of Diwali reminds us what we are working towards: joy. Real, unguarded, childlike joy.

This Diwali, AFJS Trust brought together 80 children and their families for an evening of celebration — sweets, diyas, small gifts, and the kind of laughter that echoes down a lane and refuses to stop.

**More Than a Festival**
For many of the families we support, Diwali has historically been a quiet, muted affair. When you're struggling to pay for the next meal, fireworks and new clothes feel like a distant dream.

Our Diwali celebration wasn't about charity. It was about belonging. Every child received a small gift pack — sweets, a toy, a set of art supplies. Every family sat together. Every child wore something clean and bright. Nobody was on the outside looking in.

**What the Children Said**
One girl — eight years old, sharp as a needle, eyes like she's already figured out the world — told one of our volunteers: "This is the best Diwali I've ever had." She'd never said anything like that before, we were told. She was not the kind of child who said things like that.

That sentence stayed with us for weeks.

**Why Celebrations Matter**
We sometimes hear criticism that NGOs should focus only on "practical" needs — food, school fees, healthcare. We understand this view. But joy is not a luxury. Dignity is not optional. Moments of celebration are part of what it means to be fully human.

We will be back next Diwali. And every Diwali after that.`,
  },
  "volunteering-at-afjs-trust": {
    title: "What Volunteering at AFJS Trust Looks Like — And Why It Will Change You",
    date: "February 18, 2022",
    author: "John Dsouza",
    category: "Community",
    readTime: "4 min",
    image: "/images/education-group.jpg",
    excerpt: "You don't need to be rich to make a difference. Our volunteers discover that the biggest gift they give is also the one they receive.",
    content: `People come to volunteer at AFJS Trust expecting to give something. They almost always leave feeling like they received far more than they offered.

**What Our Volunteers Do**
Volunteers are the heartbeat of AFJS Trust. Without them, we simply cannot function. What does volunteering look like in practice?

- **After-School Tutoring**: Volunteers sit with children for 90 minutes, 3 days a week, helping them with reading, writing, mathematics, and general knowledge. No teaching degree required — patience, warmth, and consistency are all you need.

- **Nutrition Drive Support**: On nutrition drive days (we run 4+ per month), volunteers help prepare meals, serve food, maintain records, and interact with families. It is physically demanding and deeply rewarding.

- **Community Outreach**: Volunteers help identify families who may benefit from our programs — visiting homes, building trust, and connecting people with support.

- **Administrative Support**: Behind every successful nutrition drive and enrollment campaign is a mountain of coordination. Volunteers help with record-keeping, social media, grant writing, and communications.

**What Volunteers Tell Us**
"I came expecting to teach. I ended up learning more than I could have imagined — about resilience, about community, about what really matters." — Priya, volunteer, Bhavnagar

"The children remember your name. They look for you. That accountability changes how you show up." — Rahul, volunteer, Bhavnagar

**How to Get Involved**
If you are in or near Bhavnagar, WhatsApp us at +91 63573 69174 or email Afjs.charitable@gmail.com. We'll have a conversation, match you with the right program, and get you started.

If you're outside India, you can volunteer your skills remotely — content creation, graphic design, grant writing, social media. Distance is no barrier.`,
  },
  "child-marriage-what-we-fight": {
    title: "Child Marriage in Gujarat: What We're Doing to Fight It",
    date: "May 22, 2022",
    author: "John Dsouza",
    category: "Programs",
    readTime: "5 min",
    image: "/images/girl-empowerment-2.jpg",
    excerpt: "Child marriage remains a reality in Gujarat's underserved communities. Education and empowerment are our most powerful tools to end it.",
    content: `Despite being illegal in India, child marriage persists in pockets of Gujarat's most underserved communities. Girls as young as 13 or 14 are married off — with devastating consequences for their health, their futures, and the futures of their children.

**Why It Happens**
Child marriage is not simply a cultural practice. It is, at its core, an economic transaction. Families facing extreme poverty view daughters as financial burdens. A marriage, even an early one, means one less mouth to feed and potentially a brideprice received.

Girls who are not in school are far more likely to be married young. School is, literally, a protective factor.

**The Health Consequences**
Girls who marry before 18 face dramatically higher risks of:
- Complications during pregnancy and childbirth (a leading cause of death among girls 15-19)
- Domestic violence and abuse
- Mental health challenges including depression and anxiety
- Social isolation from peers and community

**What AFJS Trust Does**
Our Girl Empowerment program is specifically designed to keep girls in school and out of early marriage. We work on multiple levels:

- **Family Counselling**: We engage directly with parents, grandparents, and community elders to shift attitudes. We present education as an investment that increases a girl's value and prospects — and future earning potential.

- **Mentorship Networks**: Girls benefit enormously from seeing older women who have stayed in school and built meaningful lives. Our mentors are role models, confidantes, and advocates.

- **Economic Literacy**: We help girls understand their rights, including the right to refuse early marriage, and equip them with skills that create economic alternatives.

**Every Girl We Keep in School**
is a child marriage prevented. It is that simple. Education is not just about literacy — it is the single most effective intervention to protect girls from exploitation and harm.`,
  },
  "mid-day-meal-gap-ngos-fill": {
    title: "Mid-Day Meal Schemes: The Gap That NGOs Like AFJS Fill",
    date: "August 10, 2022",
    author: "John Dsouza",
    category: "Programs",
    readTime: "4 min",
    image: "/images/nutrition-kids-3.jpg",
    excerpt: "Government mid-day meal schemes are vital but imperfect. NGOs bridge the gap — ensuring no child goes hungry in or outside school.",
    content: `India's Mid-Day Meal Scheme is one of the largest school feeding programmes in the world, serving over 120 million children in government schools. It is a remarkable achievement. It is also deeply imperfect.

**Where the Gaps Appear**
- Many children who need meals most are not enrolled in government schools
- Quality and consistency vary enormously across districts and states
- During school holidays, weekends, and examination breaks, the meals stop — but hunger doesn't
- Children in private or semi-private schools receive no government meal support

**Who Falls Through the Cracks**
The families we work with in Bhavnagar often fall outside the government scheme's reach for a combination of these reasons. Children who attend St. Xavier's Primary School — where we enroll many of our beneficiaries — receive no government meal support. And during summer breaks or after school hours, even enrolled children return to households where food is uncertain.

**Our Nutrition Drives**
AFJS Trust's Food & Nutrition Drive was created specifically to fill this gap. We run 4+ nutrition drives per month, delivering wholesome, freshly prepared meals to children and families. Our volunteers cook in community kitchens, using local ingredients, with no preservatives and no compromise on quality.

We document every drive — how many meals were served, who received them, and what was prepared — so our donors can see exactly where their money goes.

**The Numbers**
Each nutrition drive typically serves 50-100 meals. Over the course of a month, we deliver 200-400 meals directly to the families who need them most.

For ₹5,000, you can fund an entire nutrition drive — feeding 80 children for a day.`,
  },
  "christmas-with-underprivileged-families": {
    title: "Christmas with Underprivileged Families: A Night to Remember",
    date: "December 26, 2022",
    author: "John Dsouza",
    category: "Events",
    readTime: "3 min",
    image: "/images/hero-community.jpg",
    excerpt: "This Christmas, AFJS Trust celebrated with 60 families in Bhavnagar. It was a night of music, food, and the kind of joy that money cannot manufacture.",
    content: `Christmas at AFJS Trust is not about religion. It is about community — about gathering together, breaking bread, and reminding each other that no one is alone.

This Christmas, we invited 60 families from the communities we serve to an evening celebration in Bhavnagar. Volunteers decorated a community hall with paper stars and hand-painted banners. Children sang songs they'd rehearsed for two weeks. Families shared a meal that had been prepared with love by our team.

**The Moment That Stopped Time**
A grandfather — maybe 70 years old, hands roughened by decades of manual labour — sat watching his granddaughter perform a small dance on a makeshift stage. She'd been rehearsing every evening for two weeks. She wore a dress she'd never worn before.

When she finished, he looked up. His eyes were wet. He didn't say anything.

That moment is why we do this work.

**What Celebrations Provide**
Beyond the practical support we offer — school fees, nutrition, family welfare — celebrations provide something that is harder to quantify: a sense of dignity and belonging. The message we send when we gather together and celebrate is simple: you are valued. You are part of this community. You are not invisible.

**Thank You to Our Donors**
This Christmas celebration was funded entirely by donors who gave small amounts through our Razorpay gateway. ₹100 here, ₹1,000 there — it added up to a night that 60 families will remember for years.

If you gave, thank you. You were in that room, even if you weren't.`,
  },
  "family-welfare-making-ends-meet": {
    title: "Family Welfare in Practice: When Making Ends Meet Is Not Enough",
    date: "March 7, 2023",
    author: "John Dsouza",
    category: "Programs",
    readTime: "5 min",
    image: "/images/family-welfare-1.jpg",
    excerpt: "Supporting a family is more than food and school fees. Our Family Welfare program addresses the full picture of what a household needs to thrive.",
    content: `Education and nutrition are the most visible parts of what AFJS Trust does. But behind every child we support is a family — and families are complicated.

**What Family Welfare Means**
Our Family Welfare program is the quieter, less glamorous side of our work. It encompasses:

- **Financial literacy and budgeting**: Teaching families how to manage irregular income, build small savings, and plan for unexpected expenses
- **Health and hygiene education**: Access to basic health information, menstrual hygiene support for adolescent girls, and connections to government health schemes
- **Legal awareness**: Helping families understand their rights — to housing, to education, to welfare benefits they may not know they're entitled to
- **Mental health support**: Poverty is not just a material condition. It is a psychological state that generates chronic stress, shame, and hopelessness. Our team includes counsellors who work specifically with mothers and heads of household

**The Hidden Crises**
In our work with families, we regularly encounter situations that aren't visible from the outside:
- Domestic violence situations where women are too afraid or ashamed to seek help
- Elderly grandparents who are the sole caregivers for young children
- Families where the primary earner has a disability that prevents regular employment
- Chronic illness that drains whatever small savings a household had built up

**A Whole-Family Approach**
A child cannot thrive in a broken home. When we support a family — not just a child — we create the conditions in which all our other work is sustainable. The education we fund is more likely to stick. The nutrition we provide is part of a broader recovery.

Family welfare is not charity. It is long-term investment in communities.`,
  },
  "sponsoring-a-child-what-it-means": {
    title: "What It Really Means to Sponsor a Child Through AFJS Trust",
    date: "June 19, 2023",
    author: "John Dsouza",
    category: "Donors Guide",
    readTime: "4 min",
    image: "/images/education-group.jpg",
    excerpt: "Sponsoring a child's education is more than a transaction. Here's the full story of what your ₹25,000 actually does over the course of a year.",
    content: `Child sponsorship has become a well-known concept in international development. But what does it actually mean when you sponsor a child through AFJS Trust? Here's the complete picture.

**What ₹25,000 Covers**
When you commit to sponsoring a child for ₹25,000 per year, here is how that investment is used:

- **School Fees** (paid directly to St. Xavier's Primary School, Bhavnagar): ₹12,000–14,000
- **Books, Notebooks, and Stationery**: ₹2,000–3,000
- **School Uniform** (2 sets, shoes, bag): ₹2,500–3,000
- **After-School Tutoring** (volunteer-run but with operational costs): ₹2,000
- **Nutrition Support** (allocated contribution to monthly drives): ₹3,000–4,000
- **Administrative and coordination costs**: <5% of total

Every rupee is documented and accounted for. We maintain records for every child enrolled and can provide full reporting upon request.

**What You Won't Get**
We want to be honest: AFJS Trust is a small, early-stage organisation. We do not yet offer the kind of formal "meet your child" pen-pal programmes that some larger NGOs provide. Privacy concerns for children and families, combined with resource constraints, mean we operate differently.

What we do offer is full transparency — photos from our programmes (anonymised as appropriate), regular impact updates, and direct communication via WhatsApp or email.

**The Commitment We Make**
When you sponsor a child, we commit to:
- Enrolling and maintaining the child's school attendance
- Providing all educational materials
- Regular check-ins on the child's progress
- Immediate communication if any circumstances change
- A full year-end impact report on how your funds were used

Your ₹25,000 is not a donation. It is a partnership.`,
  },
  "from-germany-with-love": {
    title: "From Germany With Love: How Varun Supports AFJS Trust from Abroad",
    date: "September 30, 2023",
    author: "John Dsouza",
    category: "Founder Story",
    readTime: "5 min",
    image: "/images/impact-donation.jpg",
    excerpt: "Varun Gonsalves grew up in Bhavnagar, moved to Germany, and never stopped caring about the children he left behind. This is his story.",
    content: `When Varun Gonsalves moved to Germany, he carried Bhavnagar with him.

Not just in memory — in the daily weight of knowing that the children he'd grown up alongside were still navigating a world that hadn't gotten any easier.

**A Different Kind of Distance**
Varun and I have been friends since childhood. We attended the same church, played in the same lanes, and shared a front-row view of the inequality that runs through Bhavnagar's communities. Not dramatic, cinematic poverty — just the quiet, grinding kind. Children who couldn't afford notebooks. Families that skipped meals. Girls who disappeared from school quietly, without announcement, and were never spoken of again.

When Varun moved to Germany for work, that shared history didn't dissolve. If anything, distance made it sharper.

**What Distance Makes Possible**
There are things Varun can do from Germany that I cannot do from Bhavnagar — and vice versa. He has been instrumental in:

- **Connecting AFJS Trust with the Indian diaspora in Europe**: Many NRIs want to give back but don't know trustworthy channels. Varun is that personal connection.
- **Raising awareness internationally**: The story of an Indian NGO, told by someone who grew up there and now lives in Europe, resonates with audiences that our social media alone cannot reach.
- **Providing strategic and financial support**: Varun has personally contributed to our funding in the early, difficult months when every rupee mattered enormously.

**What He Tells People**
When Varun talks about AFJS Trust, he doesn't use the language of charity. He talks about responsibility. He says: "These are our people. These are the kids from our lanes. We didn't escape poverty — we were lucky. Lucky looks a lot like privilege when you're the one who didn't make it out."

That perspective is the soul of what we do.

**Supporting From Anywhere in the World**
You don't have to be in Bhavnagar — or even in India — to support AFJS Trust. Varun's example shows that geography is no barrier to impact.

If you want to donate from abroad, visit joyfullsmiles.org/donate. And if you want to connect with our international community, reach out via WhatsApp or email. We'll be glad to hear from you.`,
  },
  "five-ways-help-without-donating": {
    title: "5 Powerful Ways to Help AFJS Trust Without Donating Money",
    date: "December 12, 2023",
    author: "John Dsouza",
    category: "Community",
    readTime: "4 min",
    image: "/images/education-laptops.jpg",
    excerpt: "Not everyone can donate. But everyone can help. Here are five high-impact ways to support our work that don't require opening your wallet.",
    content: `We believe in removing every barrier to supporting children's education. And that includes the barrier of money.

If you can't donate right now — or simply prefer to help in other ways — here are five genuinely impactful things you can do.

**1. Share Our Story**
The most underrated thing you can do for any NGO is amplify its reach. Share our posts on Instagram (@afjs_charitable_trust). Forward this blog to someone who might care. Send our WhatsApp number to a friend who's been wanting to give back.

Word-of-mouth is how small organisations grow. One share from you could bring in a donor we'd never have reached.

**2. Volunteer Your Skills**
Do you write well? Design? Do you know how to run Facebook ads or understand Google Analytics? Could you help us with grant applications or proposal writing?

Remote volunteers with professional skills are often more impactful than in-person help. If you have a skill, we have a use for it.

**3. Raise Funds Among Friends**
Birthday fundraisers on social media, employer giving schemes, or simply passing a collection among your friend group — peer-to-peer fundraising is one of the most effective ways to expand donations beyond your own pocket.

If you raise ₹10,000 among your friends, you've just funded over a month of nutrition support.

**4. Write Reviews or Testimonials**
Google reviews, Charity Navigator profiles, and social media testimonials build the trust that encourages new donors. If you've interacted with AFJS Trust and had a positive experience, writing a review takes five minutes and lasts forever.

**5. Connect Us with Potential Partners**
Do you know a company that runs CSR initiatives? A foundation looking for grant recipients? A school that wants to partner with an NGO for student service projects?

Introductions cost nothing and can unlock resources beyond what individual donations can provide.

We are grateful for every form of support. The children don't know how you helped — they just know that you did.`,
  },
  "bhavnagar-underprivileged-communities": {
    title: "Understanding Bhavnagar's Underserved Communities — and Why We Work There",
    date: "February 28, 2024",
    author: "John Dsouza",
    category: "Advocacy",
    readTime: "5 min",
    image: "/images/community-food.jpg",
    excerpt: "Bhavnagar is a city of contrasts. Understanding its underserved communities is the first step to changing them.",
    content: `Bhavnagar sits on the Saurashtra coast of Gujarat — a city of around 700,000 people that is simultaneously one of Gujarat's most historically significant cities and one of its most economically stratified.

**A City of Contrasts**
The old city of Bhavnagar has magnificent architecture: palaces, wide promenades, a former princely grandeur. The port area was once a centre of ship-breaking — one of the world's largest and most dangerous industries, which employed thousands of men in brutal, hazardous work.

Today, Bhavnagar is growing as a commercial and educational hub. New schools and colleges have expanded. The middle class has risen. And in the lanes behind the main roads, in communities that don't make it onto tourist maps, families have been left behind.

**Who Lives in the Communities We Serve**
The families we support are predominantly:
- Former or current daily wage workers in construction, domestic service, and informal manufacturing
- Families who migrated from rural Gujarat seeking work and found only precarious employment
- Single-parent households, often headed by women, managing on unpredictable income
- Families with disabled members whose care absorbs most available resources
- Muslim, Dalit, and adivasi communities that face compounding layers of marginalisation

**Why Bhavnagar**
We work in Bhavnagar because it is where we are from. John Dsouza grew up here. He knows these lanes. He knows these families. Relationships built over years of community presence are worth more than the most sophisticated intervention from outside.

We also work in Ahmedabad, where similar communities exist and where many Bhavnagar families have migrated seeking work.

**The Future We're Working Toward**
Bhavnagar deserves to be a city where every child — regardless of caste, religion, gender, or economic background — has a genuine shot at a joyful, empowered future.

That future is not inevitable. It requires work. We are doing that work, every day, one child at a time.`,
  },
  "women-literacy-development": {
    title: "Women's Literacy: The Lever That Moves Everything",
    date: "May 8, 2024",
    author: "John Dsouza",
    category: "Programs",
    readTime: "4 min",
    image: "/images/girl-empowerment-3.jpg",
    excerpt: "When a woman can read and write, everything changes — for her, her children, and her community. Why literacy is the foundation of all development.",
    content: `There is a statistic so well-established it has become almost a cliché: every year of education a woman receives increases her children's survival rate by 9%. It's repeated so often because it is so reliably true.

But what does it actually look like, on the ground, in Bhavnagar?

**What We See**
The mothers of children we support range widely in their own education levels. The correlation is stark: mothers who completed at least 8th standard are dramatically more likely to:
- Keep their daughters in school
- Access government health and welfare schemes on their own behalf
- Make informed decisions about family health and hygiene
- Resist pressure from in-laws or community members to pull girls out of school

The mothers who cannot read often rely entirely on intermediaries — usually male relatives — to navigate any formal process. This dependency limits their agency and makes them more vulnerable to exploitation.

**What AFJS Trust Does**
Our women's literacy component is one of the newer elements of our work, but one we are committed to expanding. We run monthly literacy circles for mothers and older adolescent girls who missed formal education — providing basic reading, writing, and numeracy skills in a safe, supportive community setting.

We also run workshops on financial literacy, health rights, and legal awareness — equipping women with information that changes the decisions they make on behalf of their families.

**The Multiplier Effect**
When a mother can read her child's school report card, she participates in her education differently. When she can read a government form, she doesn't need to beg for help navigating the system. When she can count and calculate, she can manage the household budget more effectively.

Educating a woman is the highest-leverage investment in development that exists. We are committed to it — and grateful to every donor who makes it possible.`,
  },
  "our-first-year-what-we-learned": {
    title: "Our First Year: What We Built, What We Learned, and What Comes Next",
    date: "August 20, 2024",
    author: "John Dsouza",
    category: "Transparency",
    readTime: "6 min",
    image: "/images/impact-donation.jpg",
    excerpt: "Every organisation makes mistakes in its first year. Transparency demands we share ours — alongside what we got right.",
    content: `AFJS Trust is a young organisation. We were formally registered in 2025, but the work began earlier — informally, through volunteer energy and personal funds, before we had the legal structure to accept public donations.

Looking back at our first full year of operations, I want to be honest about what worked, what didn't, and what we're doing differently.

**What We Got Right**
The core programming works. Children enrolled in school stay enrolled. Nutrition drives reach families who would otherwise go without. Family welfare counselling opens doors that were previously closed.

Our volunteer model — relying on community members with a genuine stake in the outcomes — is more sustainable and more effective than an entirely paid-staff approach. People who live in the community we serve understand it in ways that outsiders never fully can.

Our relationships with families are real. When I walk through the lanes of Vidhyanagar, I know people. They know me. That trust took years to build, and it is the foundation of everything.

**What We Learned**
We underestimated the administrative burden of running a registered charitable trust. Compliance, documentation, and reporting require time and expertise that volunteer-run organisations often lack.

We also underestimated the difficulty of communicating our impact to potential donors. The work we do is human, not statistical. But donors — especially first-time donors — need numbers. We've invested in building better documentation systems.

And we learned that reaching international donors requires a different kind of storytelling and a different set of communication channels than reaching donors in India.

**What Comes Next**
We are focused on three things for the next year:
1. Deepening our programs — more children, more consistently
2. Building a more robust volunteer and donor communication system
3. Expanding our presence in Ahmedabad to reach more communities

Thank you for being part of this journey. The work is far from done.`,
  },
  "mental-health-children-poverty": {
    title: "The Hidden Crisis: Mental Health and Children Growing Up in Poverty",
    date: "October 15, 2024",
    author: "John Dsouza",
    category: "Advocacy",
    readTime: "5 min",
    image: "/images/education-group.jpg",
    excerpt: "Poverty is not just a material condition. The psychological toll on children is real, measurable, and deeply underaddressed in India.",
    content: `When we talk about supporting underprivileged children, we typically talk about school fees, books, and meals. These things are essential. But there is a dimension of children's wellbeing that is almost never discussed: mental health.

**The Psychology of Poverty**
Research in developmental psychology has established clearly that chronic poverty generates chronic stress — in adults and in children. The uncertainty of not knowing where the next meal comes from, the shame of not having what peers have, the fear of a parent who is overwhelmed and volatile — these are not background noise. They are foreground experiences that shape a child's developing brain.

Children raised in chronic stress show measurable differences in:
- Cognitive development and working memory
- Emotional regulation — the ability to manage feelings and impulses
- Social bonding and trust in adults
- Academic performance, not because of reduced intelligence, but because of reduced cognitive bandwidth

**What We See in Practice**
In the children we work with, we see these patterns regularly. A child who cannot sit still in class is not being disruptive — they may be responding to a chaotic home environment. A child who cannot focus on homework has not inherited a learning disability — they are managing anxiety that would challenge any adult.

Our volunteer tutors are trained to recognise and respond to these signs. We work with a simple but powerful principle: safety first. A child who feels safe in our after-school space can begin to learn.

**What AFJS Trust Is Building**
We are developing partnerships with mental health professionals who can provide counselling support to the most vulnerable children in our programmes. This is resource-intensive and we are doing it carefully.

In the meantime, our community spaces — tutoring centres, nutrition drive venues, family welfare sessions — are deliberately designed to be warm, consistent, and predictable. For a child whose home life is chaotic, predictability itself is therapeutic.

We cannot address the root causes of poverty overnight. But we can provide safe havens within it.`,
  },
  "science-of-hope-community-support": {
    title: "The Science of Hope: How Community Support Transforms Outcomes",
    date: "January 10, 2025",
    author: "John Dsouza",
    category: "Advocacy",
    readTime: "4 min",
    image: "/images/community-food.jpg",
    excerpt: "Research shows that social support is as predictive of educational outcomes as family income. Community is not a soft concept — it is a hard intervention.",
    content: `We use the word "community" so often that it risks losing its meaning. But in development work, community is not a soft, feel-good concept. It is a hard, empirically validated intervention that changes outcomes.

**What the Research Shows**
A growing body of research in education and developmental psychology demonstrates that social capital — the networks of trust, reciprocity, and shared norms that hold communities together — is as predictive of children's educational outcomes as family income.

In other words: a child with a strong community behind them can overcome material disadvantage more effectively than a child who is isolated, even if that isolated child has greater financial resources.

**Why Community Matters for Learning**
- Children who feel part of a community take more risks in learning — they ask more questions, admit confusion more readily, engage more fully
- Community belonging reduces chronic stress, which frees up cognitive bandwidth for learning
- Adults in strong communities monitor children collectively — there are more eyes, more encouragement, more accountability
- Communities share information — about government schemes, health resources, educational opportunities — that isolated families miss

**What AFJS Trust Builds**
Our programmes are intentionally community-centred. Nutrition drives are not just about food — they are about families gathering together, sharing a meal, seeing that they are not alone. After-school tutoring sessions create peer groups where children learn from each other. Volunteer mentors become trusted adults in children's lives.

This is not incidental to our educational mission. It IS our educational mission.

Hope, like poverty, is contagious. We are working to ensure it spreads.`,
  },
  "education-breaks-cycle-poverty": {
    title: "Why Education Is the Only Thing That Permanently Breaks the Poverty Cycle",
    date: "April 3, 2025",
    author: "John Dsouza",
    category: "Education",
    readTime: "5 min",
    image: "/images/education-laptops.jpg",
    excerpt: "Every other intervention treats the symptoms. Education treats the cause. Here's the evidence — and what it means for how we approach our work.",
    content: `We are sometimes asked: why focus on education? Why not healthcare, or housing, or direct cash transfers?

The answer is not that these things don't matter — they do. The answer is that education is the only intervention with a permanent, compounding effect on poverty.

**The Compound Interest of Education**
Every other social intervention has to be repeated. A meal feeds a child for a day. A healthcare visit cures an illness for a season. A cash transfer sustains a family for a month.

Education accumulates. Every year of quality education a child receives adds to a permanent store of capacity — knowledge, reasoning, confidence, credentials — that compounds over a lifetime.

A child who completes secondary education earns, on average, 50% more than a child who dropped out in primary school. Their children are more likely to attend school. Their grandchildren are more likely still. The break in the poverty cycle is genuine and intergenerational.

**Why Quality Matters**
Not all education is equal. A child who attends school but sits in an overcrowded classroom with an absent teacher does not gain the same returns as a child in a well-resourced environment with engaged instruction.

This is why AFJS Trust partners with St. Xavier's Primary School in Bhavnagar — one of the region's most respected institutions — rather than simply enrolling children in the nearest government school. The quality of education matters as much as its presence.

**The Honest Caveat**
Education alone cannot solve poverty. A child who attends school still needs to eat. Their family still needs economic stability. Their community still needs safety and opportunity.

This is why our four pillars — education, girl empowerment, nutrition, and family welfare — work together. Education is the foundation. The others create the conditions in which it can flourish.

If you want to permanently change a child's trajectory, invest in their education. Nothing else comes close.`,
  },
  "annual-impact-highlights-2024": {
    title: "Annual Impact Highlights: What We Achieved Together in 2024",
    date: "July 15, 2025",
    author: "John Dsouza",
    category: "Transparency",
    readTime: "5 min",
    image: "/images/impact-donation.jpg",
    excerpt: "A full accounting of what AFJS Trust achieved in 2024 — the children reached, the meals served, the lives changed — and what it cost.",
    content: `Transparency is not a policy for AFJS Trust. It is a value. And so, as we close out the 2024 programme year, we want to share a complete account of what we accomplished — and what it took.

**Children Enrolled and Retained**
In 2024, AFJS Trust supported the enrolment and retention of 200+ children across Bhavnagar and Ahmedabad. This includes both new enrolments and children whose continued school attendance was at risk without our intervention.

Of these children, over 90% completed the academic year — a retention rate we are proud of and committed to improving further.

**Nutrition Drives**
We ran 52 nutrition drives across the year — more than one per week. Total meals served: approximately 4,000. Every meal was freshly prepared by our volunteer team, documented, and distributed to families in our programme communities.

**Girl Empowerment**
Our girl empowerment programme reached 150+ girls in 2024. Workshops on confidence, life skills, legal rights, and mentorship were attended by girls aged 10-18. Dropout prevention interventions helped retain 30 girls who were at immediate risk of leaving school.

**Family Welfare**
Our family welfare team conducted 200+ home visits, connecting families with government schemes they were entitled to but not accessing, providing counselling support, and facilitating access to healthcare.

**The Financials**
Total expenditure in 2024: ₹18,00,000 (approximately)
- Education (fees, materials, uniforms): 55%
- Nutrition programmes: 25%
- Family welfare and administration: 15%
- Communications and outreach: 5%

For every ₹100 received, ₹95 goes directly to programme delivery.

**What Comes Next**
2025 targets: 300 children, 60 nutrition drives, expanded women's literacy programme, and the launch of our formal case study documentation system.

We could not have done any of this without our donors, volunteers, and community partners. Thank you.`,
  },
  "how-your-donation-educates-a-child": {
    title: "How Your Donation Educates a Child in India",
    date: "March 15, 2026",
    author: "John Dsouza",
    category: "Transparency",
    readTime: "4 min",
    image: "/images/education-group.jpg",
    excerpt: "Every rupee you donate to AFJS Trust goes directly to a child's education.",
    content: `When you donate to AFJS Charitable Trust, you're not just sending money — you're investing in a child's future. Here's exactly what happens with every rupee.

**School Fees at St. Xavier's Primary School**
We enroll underprivileged children at St. Xavier's Primary School, Devbagh, Bhavnagar — one of the region's most reputed institutions. Annual fees, paid directly to the school, ensure consistent, quality education.

**Books, Stationery, and Uniforms**
A child without books or a proper uniform faces daily humiliation and barriers to learning. We provide complete learning kits — notebooks, stationery, and school uniforms — so children can attend with confidence.

**After-School Tutoring and Mentorship**
Many children in underprivileged families lack the home environment needed for homework or self-study. Our volunteer mentors provide after-school tutoring sessions that bridge this gap.

**Nutrition Support**
A hungry child cannot learn. Alongside education, we ensure children receive nutrition support through our Food & Nutrition Drive, so they arrive at school ready to engage and absorb.

**The Total: ₹25,000 per child per year**
That's the full cost of transforming a child's educational trajectory for an entire year. Less than ₹2,100 per month. Less than ₹70 per day.

Every rupee counts. Even ₹100 buys notebooks for a week. ₹1,000 covers a month of meals. Whatever you can give, it goes directly to a child who needs it.`,
  },
  "girl-empowerment-through-education": {
    title: "Girl Empowerment Through Education: Why It Changes Everything",
    date: "March 5, 2026",
    author: "John Dsouza",
    category: "Programs",
    readTime: "5 min",
    image: "/images/girl-empowerment-1.jpg",
    excerpt: "The data is clear — educating girls produces the highest returns of any development investment.",
    content: `The numbers are stark. In India, approximately 40% of girls drop out of school before completing secondary education. In Gujarat's underprivileged communities, this number is even higher.

**Why Girls Drop Out**
The reasons are complex and interconnected: economic pressure on families to have daughters contribute through domestic work, early marriage, lack of safety on the way to school, and deep-rooted cultural beliefs that education is less important for girls.

**The Multiplier Effect**
But here's what the data shows: educating girls is the single highest-return investment in human development. When a girl stays in school:
- Her children are 50% more likely to survive past age 5
- Her family's income increases by 10-20% for each additional year of schooling
- She is far less likely to marry before 18
- Her own daughters are more likely to attend school

**What AFJS Trust Does**
Our Girl Empowerment program specifically identifies girls at the highest risk of dropping out. We provide:
- Full educational scholarships
- Female mentors who serve as role models
- Confidence and life-skills workshops
- Family engagement sessions that shift parental attitudes
- Safe community spaces where girls can study and socialize

**Real Change in Real Time**
Since our program began, we have supported over 150 girls in Bhavnagar and Ahmedabad. Many have gone on to pursue secondary education, a pathway their mothers never had.

Education is not just a right. For girls, it is a lifeline — for themselves, and for the generations they will raise.`,
  },
  "section-80g-tax-exemption-india": {
    title: "Section 80G Tax Exemption: Save Tax While Changing Lives",
    date: "February 20, 2026",
    author: "John Dsouza",
    category: "Donors Guide",
    readTime: "6 min",
    image: "/images/impact-donation.jpg",
    excerpt: "Your donation to a registered Indian NGO can save you in tax. Here's how Section 80G works.",
    content: `One of the most underutilized benefits for Indian taxpayers is the Section 80G deduction — a provision that lets you claim tax deductions on donations made to registered charitable organizations.

**What is Section 80G?**
Section 80G of the Income Tax Act, 1961 allows donors to deduct donations made to registered NGOs from their taxable income. Depending on the organization's registration, you may claim 50% or 100% of the donated amount as a deduction.

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

**For NRI Donors**
If you are an NRI, tax deductibility depends on your country of residence and any applicable Double Taxation Avoidance Agreements (DTAA). Please consult your tax advisor for guidance specific to your situation.

Donating is now more rewarding than ever — you help a child, and your government helps you.`,
  },
  "how-to-donate-from-usa-uk-eu": {
    title: "How to Donate to an Indian NGO from the US, UK, or EU",
    date: "February 10, 2026",
    author: "John Dsouza",
    category: "Donors Guide",
    readTime: "5 min",
    image: "/images/hero-community.jpg",
    excerpt: "Living abroad but want to support children in India? Here's your complete guide.",
    content: `Many of our most generous supporters live outside India — in the US, UK, and across Europe. If you're an Indian diaspora member or simply someone moved by the cause, here's how you can donate from abroad.

**Option 1: Online via Razorpay (Easiest)**
Our Razorpay payment gateway accepts international debit and credit cards (Visa, Mastercard, Amex). Simply visit joyfullsmiles.org/donate, select your amount, and pay with your international card.

Note: International card payments may attract a small currency conversion fee from your bank.

**Option 2: WhatsApp Us for Bank Transfer**
For larger donations or if you prefer a direct bank transfer, WhatsApp us at +91 63573 69174. We'll provide our bank account details for NEFT/SWIFT transfers.

**Option 3: UPI (For NRIs with Indian Bank Accounts)**
If you maintain an NRI account with an Indian bank, you can donate directly via UPI. Contact us for our UPI details.

**Tax Deductibility Outside India**
- **USA**: Donations to Indian NGOs are generally not tax-deductible in the US unless routed through a 501(c)(3) partner. Contact us to explore this option.
- **UK**: Gift Aid applies only to UK-registered charities. We are working on partnership arrangements.
- **EU**: Tax deductibility varies by country. Consult your local tax advisor.

**FCRA Compliance**
For large foreign donations, FCRA (Foreign Contribution Regulation Act) compliance is required. Please contact us directly to ensure your donation meets all regulatory requirements.

**We Make It Easy**
Whatever your location, we'll work with you to find the best way to donate. WhatsApp us at +91 63573 69174 and we'll guide you through the entire process.`,
  },
  "nutrition-learning-full-stomach-better-future": {
    title: "Nutrition and Learning: Why a Full Stomach Means a Better Future",
    date: "January 28, 2026",
    author: "John Dsouza",
    category: "Programs",
    readTime: "4 min",
    image: "/images/nutrition-kids-1.jpg",
    excerpt: "Malnourished children are 20% less likely to attend school regularly. Our nutrition drive addresses this invisible barrier.",
    content: `There's an invisible barrier between millions of Indian children and education. It's not the lack of schools. It's not even the lack of teachers. It's hunger.

**The Research is Clear**
Children who are malnourished are:
- 20% less likely to attend school regularly
- Significantly less able to concentrate and retain information
- More likely to drop out before completing primary education

In Bhavnagar and Ahmedabad's underserved communities, this is not an abstract statistic. It's a daily reality for hundreds of families.

**Why We Run Nutrition Drives**
AFJS Trust's Food & Nutrition Drive was born from a simple observation: the children we were enrolling in school were struggling to focus — not because of lack of intelligence or willingness, but because they were hungry.

We now run 4+ nutrition drives per month, delivering hot, wholesome meals to children and families across Bhavnagar and Ahmedabad. Every meal is prepared with care by our volunteers, using fresh, nutritious ingredients.

**The Results We See**
Children who receive regular nutrition support through our program show:
- Higher school attendance
- Better engagement in after-school tutoring
- Improved energy and concentration
- Stronger family participation in education programs

**How You Can Help**
₹100 buys nutritious meals for a child for a week.
₹1,000 covers an entire month of meal support.
₹5,000 funds a full community nutrition drive.

A full stomach is the foundation of a bright future. Donate today and help us keep it full.`,
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

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://joyfullsmiles.org" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://joyfullsmiles.org/blog" },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://joyfullsmiles.org/blog/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
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
          <span>{post.date}</span><span>·</span><span>{post.readTime} read</span>
          <span>·</span><span>By {post.author}</span>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-5">
          {paragraphs.map((p, i) => {
            if (p.startsWith("**") && p.endsWith("**") && !p.slice(2, -2).includes("**")) {
              return <h2 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-3">{p.replace(/\*\*/g, "")}</h2>;
            }
            if (p.startsWith("- ") || p.startsWith("1.")) {
              const items = p.split("\n").filter(l => l.match(/^[-\d]/));
              return <ul key={i} className="list-none space-y-1.5">{items.map((item, j) => <li key={j} className="flex gap-2 items-start"><span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0" /><span>{renderInline(item.replace(/^-\s|^\d+\.\s/, ""))}</span></li>)}</ul>;
            }
            return <p key={i}>{renderInline(p)}</p>;
          })}
        </div>

        {/* Author card */}
        <div className="mt-10 p-6 bg-teal-950 rounded-2xl flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold text-lg shrink-0">
            {post.author.split(" ").map(n => n[0]).join("")}
          </div>
          <div>
            <p className="font-bold text-white">{post.author}</p>
            <p className="text-teal-300 text-sm">Founder &amp; Secretary, AFJS Charitable Trust · Bhavnagar, Gujarat</p>
            <p className="text-gray-400 text-sm mt-1 leading-relaxed">
              John Dsouza grew up in Bhavnagar and founded AFJS Trust after witnessing the hardships of underprivileged children in his hometown. He leads day-to-day operations and programme delivery.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 bg-teal-50 rounded-3xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to make a difference?</h3>
          <p className="text-gray-600 mb-5">Your donation directly funds the work described in this article.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/donate" className="px-8 py-3.5 bg-coral-400 hover:bg-coral-500 text-white font-bold rounded-full shadow-lg transition-all hover:-translate-y-0.5">Donate Now ❤</Link>
            <a href="https://wa.me/916357369174" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-full shadow-lg transition-all hover:-translate-y-0.5">Chat on WhatsApp</a>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/blog" className="text-teal-500 hover:text-teal-600 font-semibold transition-colors">← Back to Blog</Link>
        </div>
      </div>
    </>
  );
}
