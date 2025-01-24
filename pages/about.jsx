import Layout from "@/components/layout/layout";
import Container from "@/components/layout/container";
import Link from "next/link";
import LinkCard from "@/components/blog/link-card";

import s from "@/styles/pages/about.module.scss";
import { NextSeo } from "next-seo";
import { siteTitle, domain } from "@/utils/seo";
import { openSans } from "@/utils/fonts";

const About = () => {
  return (
    <>
      <NextSeo
        title={`About | ${siteTitle}`}
        description="This page is all about me and about WebTech Note."
        openGraph={{
          images: [
            {
              url: `${domain}/ogp.png`,
              width: 1300,
              height: 630,
              alt: "WebTech Note",
            },
          ],
        }}
      />
      <Layout>
        <main className={s.about}>
          <Container additionalClass={s.container}>
            <h1 className={`${s.main_title} ${openSans.className}`}>
              About Me
            </h1>
            <div className={s.content}>
              <div className={s.intro}>
                <p>Hi 👋 I'm Bank,</p>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Tenetur ipsum nihil quibusdam inventore odit delectus
                  praesentium temporibus harum? Delectus molestiae quisquam eum
                  a enim ipsa deleniti maxime quibusdam possimus et?
                </p>

                <h2 className={openSans.className}>Experience</h2>
                <h3 className={openSans.className}>
                  Current Role: Software Test Engineer
                </h3>
                <p>
                  I have been working as a Software Test Engineer, where I
                  design test coverage matrices and detailed test cases. My
                  responsibilities include executing test cases at each testing
                  stage, preparing test data, logging issues, and effectively
                  communicating with relevant teams. This role has honed my
                  skills in software testing and the testing process.
                </p>

                <h3 className={`${s.experience_role} ${openSans.className}`}>
                  Data Analyst at Convert Cake
                </h3>
                <p>
                  In 2023, I took on a contract role as a Data Analyst at
                  Convert Cake. Here, I developed a performance marketing
                  dashboard using Looker Studio, automated workflows with
                  low-code tools, and created a notification bot that integrated
                  Google Sheets with Slack. My work involved extensive data
                  cleaning and formatting, showcasing my analytical skills.
                </p>
                <h3 className={`${s.experience_role} ${openSans.className}`}>
                  Background: Avionics Technician at the Royal Thai Air Force
                </h3>

                <p>
                  My journey began in the Royal Thai Air Force, where I worked
                  as an Avionics Technician for over seven years. This
                  experience provided me with a strong foundation in technical
                  skills and problem-solving. I also briefly worked as an
                  Electrician, further expanding my technical expertise.
                </p>

                <h2 className={`${s.experience_role} ${openSans.className}`}>
                  My goal at the moment
                </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Similique dolorum aliquid iusto adipisci labore suscipit cum
                  dignissimos non sapiente neque explicabo maiores aspernatur
                  eum deserunt, sequi perferendis hic optio a.
                </p>

                <h2 className={openSans.className}>About WebTech Note</h2>
                <p>
                  In this blog, I'm gonna write about web development, mostly
                  front-end stuff. My current interests are Next.js and React,
                  and Jamstack so there will be a lot of articles about these
                  topics.
                </p>
                <p>
                  The reason I started this blog was because I wanted to build a
                  blog with modern tech stack. I actually have a blog{" "}
                  <a
                    href="https://web-dev.tech/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    webdev.tech
                  </a>{" "}
                  on WordPress and I still post articles once in a while, but
                  it's been almost 3 years and I'm getting bored of using the
                  same stack.
                </p>
                <p>In this blog, I use the following tech stack:</p>

                <ul>
                  <li>Next.js</li>
                  <li>MDX</li>
                  <li>CSS Modules(Sass)</li>
                  <li>Contentlayer</li>
                  <li>Vercel</li>
                </ul>

                <p>
                  I briefly explain how this blog works in{" "}
                  <Link href="/posts/how-i-built-my-blog">another post</Link>,
                  so check it out if you are interested.
                </p>

                <LinkCard postSlug="how-i-built-my-blog" />
              </div>

              <div className={s.contact}>
                <h2 className={openSans.className}>Contact Me</h2>
                <p>
                  If you'd like to talk to me or ask me something, feel free to
                  contact me through the options below:
                </p>

                <p>
                  -{" "}
                  <a
                    href="https://twitter.com/a_tatsu1512"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                  <br />-{" "}
                  <a
                    href="https://github.com/Tatsuya-akao"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </p>
              </div>
            </div>
          </Container>
        </main>
      </Layout>
    </>
  );
};

export default About;
