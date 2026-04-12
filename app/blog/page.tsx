import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Blog | Child Education, Girl Empowerment & NGO Stories | AFJS Trust",
  description: "Read AFJS Trust's blog on child education, girl empowerment, nutrition, and NGO work in Gujarat. Stories and insights from Founder John Dsouza.",
};

const posts = [
  { slug: "afjs-trust-five-years", title: "Five Years of AFJS Trust: What We've Learned", date: "March 15, 2026", category: "Founder Story", readTime: "6 min", image: "/images/impact-donation.jpg", excerpt: "Five years in, we look back at what worked, what didn't, and what drives us forward.", author: "John Dsouza" },
  { slug: "section-80g-tax-exemption-india", title: "Section 80G Tax Exemption: Save Tax While Changing Lives", date: "February 20, 2026", category: "Donors Guide", readTime: "6 min", image: "/images/impact-donation.jpg", excerpt: "Your donation to a registered Indian NGO can save you in tax. Here's how Section 80G works.", author: "John Dsouza" },
  { slug: "how-to-donate-from-usa-uk-eu", title: "How to Donate to an Indian NGO from the US, UK, or EU", date: "February 10, 2026", category: "Donors Guide", readTime: "5 min", image: "/images/hero-community.jpg", excerpt: "Living abroad but want to support children in India? Here's your complete guide.", author: "John Dsouza" },
  { slug: "education-girl-child-india-2026", title: "The State of Girl Child Education in India: 2026 Update", date: "January 28, 2026", category: "Advocacy", readTime: "6 min", image: "/images/girl-empowerment-1.jpg", excerpt: "The data is clear — educating girls produces the highest returns of any development investment.", author: "John Dsouza" },
  { slug: "science-of-hope-community-support", title: "The Science of Hope: How Community Support Transforms Outcomes", date: "January 10, 2026", category: "Advocacy", readTime: "4 min", image: "/images/community-food.jpg", excerpt: "Research shows that social support is as predictive of educational outcomes as family income.", author: "John Dsouza" },
  { slug: "nutrition-drive-december-2025", title: "December Nutrition Drive: 300 Meals, One Weekend", date: "December 20, 2025", category: "Events", readTime: "3 min", image: "/images/nutrition-kids-1.jpg", excerpt: "Last weekend, our volunteers served 300 meals across two locations in Bhavnagar. Here's how it went.", author: "John Dsouza" },
  { slug: "mental-health-children-poverty", title: "The Hidden Crisis: Mental Health and Children Growing Up in Poverty", date: "October 15, 2025", category: "Advocacy", readTime: "5 min", image: "/images/education-group.jpg", excerpt: "Poverty is not just a material condition. The psychological toll on children is real and deeply underaddressed.", author: "John Dsouza" },
  { slug: "afjs-trust-year-three", title: "Year Three: Milestones, Mistakes, and What Comes Next", date: "August 5, 2025", category: "Founder Story", readTime: "6 min", image: "/images/impact-donation.jpg", excerpt: "A candid look at our third year — what we built, what we broke, and what we're building next.", author: "John Dsouza" },
  { slug: "volunteering-with-afjs", title: "What It's Really Like to Volunteer With AFJS Trust", date: "June 30, 2025", category: "Community", readTime: "4 min", image: "/images/education-laptops.jpg", excerpt: "Six volunteers share what surprised them most about working in Bhavnagar's communities.", author: "John Dsouza" },
  { slug: "st-xaviers-school-partnership", title: "Our Partnership With St. Xavier's Primary School", date: "April 22, 2025", category: "Education", readTime: "5 min", image: "/images/education-group.jpg", excerpt: "St. Xavier's is more than a venue. It's the foundation of everything we do in child education.", author: "John Dsouza" },
  { slug: "from-germany-with-love", title: "From Germany With Love: How Varun Supports AFJS Trust from Abroad", date: "September 30, 2023", category: "Founder Story", readTime: "5 min", image: "/images/impact-donation.jpg", excerpt: "Varun Gonsalves grew up in Bhavnagar, moved to Germany, and never stopped caring.", author: "John Dsouza" },
  { slug: "sponsoring-a-child-what-it-means", title: "What It Really Means to Sponsor a Child Through AFJS Trust", date: "June 19, 2023", category: "Donors Guide", readTime: "4 min", image: "/images/education-group.jpg", excerpt: "Sponsoring a child's education is more than a transaction. Here's the full story.", author: "John Dsouza" },
  { slug: "five-ways-help-without-donating", title: "5 Powerful Ways to Help AFJS Trust Without Donating Money", date: "December 12, 2023", category: "Community", readTime: "4 min", image: "/images/education-laptops.jpg", excerpt: "Not everyone can donate. But everyone can help. Here are five high-impact ways.", author: "John Dsouza" },
  { slug: "family-welfare-invisible-crisis", title: "Family Welfare: The Invisible Crisis Behind Child Poverty", date: "March 5, 2023", category: "Advocacy", readTime: "5 min", image: "/images/family-welfare-1.jpg", excerpt: "Helping a child means helping their whole family. Here's why family welfare is central to our work.", author: "John Dsouza" },
  { slug: "nutrition-learning-connection", title: "Nutrition and Learning: Why a Full Stomach Means a Better Future", date: "November 18, 2022", category: "Education", readTime: "5 min", image: "/images/nutrition-kids-2.jpg", excerpt: "The science is unambiguous: hungry children cannot learn. Here's what we're doing about it.", author: "John Dsouza" },
  { slug: "girl-empowerment-why-it-matters", title: "Girl Empowerment Through Education: Why It Changes Everything", date: "August 14, 2022", category: "Education", readTime: "5 min", image: "/images/girl-empowerment-2.jpg", excerpt: "Educating a girl doesn't just change her life — it changes her family, community, and the next generation.", author: "John Dsouza" },
  { slug: "how-your-donation-educates", title: "How Your Donation Educates a Child in India", date: "May 3, 2022", category: "Donors Guide", readTime: "4 min", image: "/images/education-laptops.jpg", excerpt: "Ever wondered exactly where your money goes? Here's the complete breakdown.", author: "John Dsouza" },
  { slug: "diaspora-giving-guide", title: "The NRI's Guide to Giving Back to India", date: "February 28, 2022", category: "Donors Guide", readTime: "5 min", image: "/images/hero-community.jpg", excerpt: "Millions of Indians abroad want to support their home country. Here's how to do it right.", author: "John Dsouza" },
  { slug: "why-india-ngos-need-your-support", title: "Why India's NGOs Need Your Support Now More Than Ever", date: "January 25, 2021", category: "Advocacy", readTime: "5 min", image: "/images/community-food.jpg", excerpt: "India's network of grassroots NGOs is stretched thin. Here's why your support has never mattered more.", author: "John Dsouza" },
  { slug: "education-dropout-prevention", title: "Preventing School Dropout: Our Early Warning System", date: "October 10, 2021", category: "Education", readTime: "4 min", image: "/images/education-group.jpg", excerpt: "We identify at-risk children before they drop out. Here's the system we've built.", author: "John Dsouza" },
  { slug: "covid-impact-education-gujarat", title: "How COVID Changed Education in Gujarat — And What We Did", date: "June 12, 2021", category: "Advocacy", readTime: "5 min", image: "/images/education-laptops.jpg", excerpt: "The pandemic set children back by years. Here's how AFJS Trust responded.", author: "John Dsouza" },
  { slug: "breaking-cycle-child-labour-gujarat", title: "Breaking the Cycle: Child Labour in Gujarat and What We Can Do", date: "September 8, 2020", category: "Advocacy", readTime: "5 min", image: "/images/education-group.jpg", excerpt: "Child labour robs children of their childhood and perpetuates generational poverty.", author: "John Dsouza" },
  { slug: "afjs-trust-the-story-behind-our-mission", title: "AFJS Trust: The Story Behind Our Mission", date: "June 12, 2020", category: "Founder Story", readTime: "6 min", image: "/images/hero-community.jpg", excerpt: "Two childhood friends from Bhavnagar, a shared memory, and a decision to do something about it.", author: "John Dsouza" },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;
  return (
    <>
      <div className="bg-gradient-to-br from-teal-950 to-teal-700 pt-28 pb-16 px-4 text-center">
        <span className="inline-block px-4 py-1.5 bg-white/15 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">Stories & Insights</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">Our Blog</h1>
        <p className="text-teal-100 text-lg max-w-2xl mx-auto">Perspectives on child education, girl empowerment, and community development from the field in Gujarat.</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Featured post */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-12">
          <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="relative h-64 md:h-80">
              <Image src={featured.image} alt={featured.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="p-8">
              <span className="inline-block px-3 py-1 bg-teal-100 text-teal-600 text-xs font-bold rounded-full mb-3">{featured.category}</span>
              <h2 className="text-2xl font-extrabold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">{featured.title}</h2>
              <p className="text-gray-500 leading-relaxed mb-4">{featured.excerpt}</p>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span>{featured.date}</span><span>·</span><span>{featured.readTime} read</span><span>·</span><span>By {featured.author}</span>
              </div>
            </div>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-300 flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image src={post.image} alt={post.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <span className="inline-block px-2.5 py-0.5 bg-teal-50 text-teal-600 text-xs font-bold rounded-full mb-2 self-start">{post.category}</span>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors flex-1">{post.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-xs text-gray-400 mt-auto">
                  <span>{post.date}</span><span>·</span><span>{post.readTime} read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
