import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog & Resources | Child Education, Nutrition & NGO Insights | AFJS Trust",
  description: "Read AFJS Trust's blog for insights on child education in India, girl empowerment, how to donate to NGOs, Section 80G tax benefits, and inspiring impact stories from Gujarat.",
  openGraph: {
    title: "AFJS Trust Blog | Child Education, NGO Insights & 80G Donation Guide",
    description: "25 articles on child education, girl empowerment, nutrition, Section 80G, and how to donate to Indian NGOs from abroad.",
    images: [{ url: "/images/education-group.jpg", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", images: ["/images/education-group.jpg"] },
};

const posts = [
  {
    slug: "how-your-donation-educates-a-child",
    title: "How Your Donation Educates a Child in India",
    excerpt: "Every rupee you donate to AFJS Trust goes directly to a child's education. Here's exactly where your money goes and the transformation it creates.",
    date: "March 15, 2026",
    author: "John Dsouza",
    category: "Transparency",
    readTime: "4 min",
    image: "/images/education-group.jpg",
  },
  {
    slug: "girl-empowerment-through-education",
    title: "Girl Empowerment Through Education: Why It Changes Everything",
    excerpt: "The data is clear: educating girls produces the highest returns of any development investment. Here's why we focus specifically on girls.",
    date: "March 5, 2026",
    author: "John Dsouza",
    category: "Programs",
    readTime: "5 min",
    image: "/images/girl-empowerment-1.jpg",
  },
  {
    slug: "section-80g-tax-exemption-india",
    title: "Section 80G Tax Exemption: Save Tax While Changing Lives",
    excerpt: "Your donation to a registered Indian NGO can save you up to 50% in tax. Here's everything you need to know about Section 80G and how to claim it.",
    date: "February 20, 2026",
    author: "John Dsouza",
    category: "Donors Guide",
    readTime: "6 min",
    image: "/images/impact-donation.jpg",
  },
  {
    slug: "how-to-donate-from-usa-uk-eu",
    title: "How to Donate to an Indian NGO from the US, UK, or EU",
    excerpt: "Living abroad but want to support children in India? A complete guide on how to donate internationally to AFJS Trust.",
    date: "February 10, 2026",
    author: "John Dsouza",
    category: "Donors Guide",
    readTime: "5 min",
    image: "/images/hero-community.jpg",
  },
  {
    slug: "nutrition-learning-full-stomach-better-future",
    title: "Nutrition and Learning: Why a Full Stomach Means a Better Future",
    excerpt: "Malnourished children are 20% less likely to attend school regularly. Our Food & Nutrition Drive addresses this invisible barrier to education.",
    date: "January 28, 2026",
    author: "John Dsouza",
    category: "Programs",
    readTime: "4 min",
    image: "/images/nutrition-kids-1.jpg",
  },
  {
    slug: "annual-impact-highlights-2024",
    title: "Annual Impact Highlights: What We Achieved Together in 2024",
    excerpt: "A full accounting of what AFJS Trust achieved in 2024: the children reached, the meals served, the lives changed, and what it cost.",
    date: "July 15, 2025",
    author: "John Dsouza",
    category: "Transparency",
    readTime: "5 min",
    image: "/images/impact-donation.jpg",
  },
  {
    slug: "education-breaks-cycle-poverty",
    title: "Why Education Is the Only Thing That Permanently Breaks the Poverty Cycle",
    excerpt: "Every other intervention treats the symptoms. Education treats the cause. Here's the evidence, and what it means for our work.",
    date: "April 3, 2025",
    author: "John Dsouza",
    category: "Education",
    readTime: "5 min",
    image: "/images/education-laptops.jpg",
  },
  {
    slug: "science-of-hope-community-support",
    title: "The Science of Hope: How Community Support Transforms Outcomes",
    excerpt: "Research shows that social support is as predictive of educational outcomes as family income. Community is not a soft concept. It is a hard intervention.",
    date: "January 10, 2025",
    author: "John Dsouza",
    category: "Advocacy",
    readTime: "4 min",
    image: "/images/community-food.jpg",
  },
  {
    slug: "mental-health-children-poverty",
    title: "The Hidden Crisis: Mental Health and Children Growing Up in Poverty",
    excerpt: "Poverty is not just a material condition. The psychological toll on children is real, measurable, and deeply underaddressed in India.",
    date: "October 15, 2024",
    author: "John Dsouza",
    category: "Advocacy",
    readTime: "5 min",
    image: "/images/education-group.jpg",
  },
  {
    slug: "our-first-year-what-we-learned",
    title: "Our First Year: What We Built, What We Learned, and What Comes Next",
    excerpt: "Every organisation makes mistakes in its first year. Transparency demands we share ours, alongside what we got right.",
    date: "August 20, 2024",
    author: "John Dsouza",
    category: "Transparency",
    readTime: "6 min",
    image: "/images/impact-donation.jpg",
  },
  {
    slug: "women-literacy-development",
    title: "Women's Literacy: The Lever That Moves Everything",
    excerpt: "When a woman can read and write, everything changes for her, her children, and her community. Why literacy is the foundation of all development.",
    date: "May 8, 2024",
    author: "John Dsouza",
    category: "Programs",
    readTime: "4 min",
    image: "/images/girl-empowerment-3.jpg",
  },
  {
    slug: "bhavnagar-underprivileged-communities",
    title: "Understanding Bhavnagar's Underserved Communities and Why We Work There",
    excerpt: "Bhavnagar is a city of contrasts. Understanding its underserved communities is the first step to changing them.",
    date: "February 28, 2024",
    author: "John Dsouza",
    category: "Advocacy",
    readTime: "5 min",
    image: "/images/community-food.jpg",
  },
  {
    slug: "five-ways-help-without-donating",
    title: "5 Powerful Ways to Help AFJS Trust Without Donating Money",
    excerpt: "Not everyone can donate. But everyone can help. Here are five high-impact ways to support our work that don't require opening your wallet.",
    date: "December 12, 2023",
    author: "John Dsouza",
    category: "Community",
    readTime: "4 min",
    image: "/images/education-laptops.jpg",
  },
  {
    slug: "from-germany-with-love",
    title: "From Germany With Love: How Varun Supports AFJS Trust from Abroad",
    excerpt: "Varun Gonsalves grew up in Bhavnagar, moved to Germany, and never stopped caring about the children he left behind. This is his story.",
    date: "September 30, 2023",
    author: "John Dsouza",
    category: "Founder Story",
    readTime: "5 min",
    image: "/images/impact-donation.jpg",
  },
  {
    slug: "sponsoring-a-child-what-it-means",
    title: "What It Really Means to Sponsor a Child Through AFJS Trust",
    excerpt: "Sponsoring a child's education is more than a transaction. Here's the full story of what your ₹25,000 actually does over the course of a year.",
    date: "June 19, 2023",
    author: "John Dsouza",
    category: "Donors Guide",
    readTime: "4 min",
    image: "/images/education-group.jpg",
  },
  {
    slug: "family-welfare-making-ends-meet",
    title: "Family Welfare in Practice: When Making Ends Meet Is Not Enough",
    excerpt: "Supporting a family is more than food and school fees. Our Family Welfare program addresses the full picture of what a household needs to thrive.",
    date: "March 7, 2023",
    author: "John Dsouza",
    category: "Programs",
    readTime: "5 min",
    image: "/images/family-welfare-1.jpg",
  },
  {
    slug: "christmas-with-underprivileged-families",
    title: "Christmas with Underprivileged Families: A Night to Remember",
    excerpt: "This Christmas, AFJS Trust celebrated with 60 families in Bhavnagar: music, food, and the kind of joy that money cannot manufacture.",
    date: "December 26, 2022",
    author: "John Dsouza",
    category: "Events",
    readTime: "3 min",
    image: "/images/hero-community.jpg",
  },
  {
    slug: "mid-day-meal-gap-ngos-fill",
    title: "Mid-Day Meal Schemes: The Gap That NGOs Like AFJS Fill",
    excerpt: "Government mid-day meal schemes are vital but imperfect. NGOs bridge the gap, ensuring no child goes hungry in or outside school.",
    date: "August 10, 2022",
    author: "John Dsouza",
    category: "Programs",
    readTime: "4 min",
    image: "/images/nutrition-kids-3.jpg",
  },
  {
    slug: "child-marriage-what-we-fight",
    title: "Child Marriage in Gujarat: What We're Doing to Fight It",
    excerpt: "Child marriage remains a reality in Gujarat's underserved communities. Education and empowerment are our most powerful tools to end it.",
    date: "May 22, 2022",
    author: "John Dsouza",
    category: "Programs",
    readTime: "5 min",
    image: "/images/girl-empowerment-2.jpg",
  },
  {
    slug: "volunteering-at-afjs-trust",
    title: "What Volunteering at AFJS Trust Looks Like, and Why It Will Change You",
    excerpt: "You don't need to be rich to make a difference. Our volunteers find that the biggest gift they give is also the one they receive.",
    date: "February 18, 2022",
    author: "John Dsouza",
    category: "Community",
    readTime: "4 min",
    image: "/images/education-group.jpg",
  },
  {
    slug: "diwali-with-the-children",
    title: "Diwali With the Children: Joy That Cannot Be Bought",
    excerpt: "This Diwali, we celebrated with 80 children and their families in Bhavnagar. Here's what happened when light met laughter.",
    date: "November 4, 2021",
    author: "John Dsouza",
    category: "Events",
    readTime: "3 min",
    image: "/images/nutrition-kids-2.jpg",
  },
  {
    slug: "school-dropout-crisis-rural-india",
    title: "The School Dropout Crisis in Rural India: How We're Fighting It",
    excerpt: "Millions of children in rural India drop out before completing secondary education. The reasons are complex, and solvable.",
    date: "April 14, 2021",
    author: "John Dsouza",
    category: "Education",
    readTime: "5 min",
    image: "/images/education-laptops.jpg",
  },
  {
    slug: "why-india-ngos-need-your-support",
    title: "Why India's NGOs Need Your Support Now More Than Ever",
    excerpt: "India's informal welfare system, its network of grassroots NGOs, is stretched thin. Here's why your support has never mattered more.",
    date: "January 25, 2021",
    author: "John Dsouza",
    category: "Advocacy",
    readTime: "5 min",
    image: "/images/community-food.jpg",
  },
  {
    slug: "breaking-cycle-child-labour-gujarat",
    title: "Breaking the Cycle: Child Labour in Gujarat and What We Can Do",
    excerpt: "Child labour robs children of their childhood and perpetuates generational poverty. Here's why education is the most powerful antidote.",
    date: "September 8, 2020",
    author: "John Dsouza",
    category: "Advocacy",
    readTime: "5 min",
    image: "/images/education-group.jpg",
  },
  {
    slug: "afjs-trust-the-story-behind-our-mission",
    title: "AFJS Trust: The Story Behind Our Mission",
    excerpt: "Two childhood friends from Bhavnagar, a shared memory of hardship, and a decision to do something about it. This is how AFJS Trust was born.",
    date: "June 12, 2020",
    author: "John Dsouza",
    category: "Founder Story",
    readTime: "6 min",
    image: "/images/hero-community.jpg",
  },
];

const categoryColors: Record<string, string> = {
  Transparency: "bg-teal-100 text-teal-700",
  Programs: "bg-coral-400/20 text-coral-600",
  "Donors Guide": "bg-gold-400/20 text-gold-600",
  Advocacy: "bg-purple-100 text-purple-700",
  Education: "bg-blue-100 text-blue-700",
  Events: "bg-pink-100 text-pink-700",
  Community: "bg-green-100 text-green-700",
  "Founder Story": "bg-amber-100 text-amber-700",
};

const allCategories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://joyfullsmiles.org" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://joyfullsmiles.org/blog" },
  ],
};

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  const active = category && allCategories.includes(category) ? category : "All";
  const filtered = active === "All" ? posts : posts.filter((p) => p.category === active);
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <div className="bg-gradient-to-br from-teal-950 to-teal-700 pt-28 pb-16 px-4 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">Knowledge Hub</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Blog &amp; Resources</h1>
        <p className="text-teal-100 text-lg max-w-2xl mx-auto">Insights on child education, girl empowerment, and how your donations make a real difference. Written by our founders from Bhavnagar.</p>
      </div>

      {/* Category filter — URL-based, works without JS */}
      <div className="bg-white border-b border-gray-100 sticky top-16 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-2 overflow-x-auto scrollbar-none">
          {allCategories.map((cat) => {
            const isActive = cat === active;
            return (
              <Link
                key={cat}
                href={cat === "All" ? "/blog" : `/blog?category=${encodeURIComponent(cat)}`}
                scroll={false}
                className={`shrink-0 px-4 py-1.5 rounded-full text-xs font-bold transition-colors ${
                  isActive
                    ? cat === "All"
                      ? "bg-teal-500 text-white"
                      : (categoryColors[cat] || "bg-gray-200 text-gray-700") + " ring-2 ring-offset-1 ring-teal-400"
                    : cat === "All"
                    ? "bg-gray-100 text-gray-600 hover:bg-teal-50 hover:text-teal-600"
                    : (categoryColors[cat] || "bg-gray-100 text-gray-600") + " opacity-70 hover:opacity-100"
                }`}
              >
                {cat}
              </Link>
            );
          })}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-20">No posts in this category yet.</p>
        ) : (
          <>
            {/* Featured post */}
            <Link
              href={`/blog/${featured.slug}`}
              className="group block mb-12 bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-teal-200 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300"
            >
              <div className="md:flex">
                <div className="md:w-1/2 relative h-64 md:h-auto overflow-hidden">
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10" />
                </div>
                <div className="md:w-1/2 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-teal-500 text-white rounded-full text-xs font-bold">
                      {active === "All" ? "Latest" : "Top Pick"}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${categoryColors[featured.category] || "bg-gray-100 text-gray-600"}`}>{featured.category}</span>
                  </div>
                  <h2 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors leading-tight">{featured.title}</h2>
                  <p className="text-gray-500 leading-relaxed mb-5">{featured.excerpt}</p>
                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <span>{featured.date}</span>
                    <span>·</span>
                    <span>{featured.readTime} read</span>
                    <span>·</span>
                    <span>By {featured.author}</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Grid of remaining posts */}
            {rest.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
                {rest.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-teal-200 shadow-sm hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                    <div className="relative h-44 overflow-hidden">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${categoryColors[post.category] || "bg-gray-100 text-gray-600"}`}>{post.category}</span>
                        <span className="text-gray-400 text-xs">{post.readTime} read</span>
                      </div>
                      <h2 className="font-bold text-gray-900 text-base mb-2 group-hover:text-teal-600 transition-colors leading-snug">{post.title}</h2>
                      <p className="text-gray-500 text-sm leading-relaxed flex-1">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                        <div>
                          <span className="text-xs text-gray-400 block">{post.date}</span>
                          <span className="text-xs text-gray-500">By {post.author}</span>
                        </div>
                        <span className="text-teal-500 text-xs font-semibold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-0.5">Read →</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </>
        )}

        <div className="mt-12 bg-teal-50 rounded-3xl p-8 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Ready to make a difference?</h3>
          <p className="text-gray-600 mb-5">Reading is great — but donating changes lives.</p>
          <Link href="/donate" className="inline-block px-8 py-3.5 bg-coral-400 hover:bg-coral-500 text-white font-bold rounded-full shadow-lg transition-all hover:-translate-y-0.5">Donate Now ❤</Link>
        </div>
      </div>
    </>
  );
}
