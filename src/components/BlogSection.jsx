import React from 'react';

const BlogSection = () => {
  const blogPosts = [
    {
      imgSrc: './assets/images/popular-1.jpg',
      date: '04 Dec',
      time: '10:30 AM',
      author: 'Jony Bristow',
      title: 'A good traveler has no fixed plans and is not intent on arriving.',
      link: '#',
    },
    {
      imgSrc: './assets/images/blog-2.jpg',
      date: '04 Dec',
      time: '10:30 AM',
      author: 'Jony Bristow',
      title: 'A good traveler has no fixed plans and is not intent on arriving.',
      link: '#',
    },
    {
      imgSrc: './assets/images/blog-3.jpg',
      date: '04 Dec',
      time: '10:30 AM',
      author: 'Jony Bristow',
      title: 'A good traveler has no fixed plans and is not intent on arriving.',
      link: '#',
    },
  ];

  return (
    <section className="section blog">
      <div className="container">
        <p className="section-subtitle">From The Blog Post</p>
        <h2 className="h2 section-title">Latest News & Articles</h2>

        <ul className="blog-list">
          {blogPosts.map((post, index) => (
            <li key={index}>
              <div className="blog-card">
                <figure className="card-banner">
                  <a href={post.link}>
                    <img
                      src={post.imgSrc}
                      width="740"
                      height="518"
                      loading="lazy"
                      alt={post.title}
                      className="img-cover"
                    />
                  </a>
                  <span className="card-badge">
                    <ion-icon name="time-outline"></ion-icon>
                    <time dateTime="12-04">{post.date}</time>
                  </span>
                </figure>

                <div className="card-content">
                  <div className="card-wrapper">
                    <div className="author-wrapper">
                      <figure className="author-avatar">
                        <img
                          src="./assets/images/author-avatar.png"
                          width="30"
                          height="30"
                          alt={post.author}
                        />
                      </figure>
                      <div>
                        <a href="#" className="author-name">
                          {post.author}
                        </a>
                        <p className="author-title">Admin</p>
                      </div>
                    </div>

                    <time className="publish-time" dateTime="10:30">
                      {post.time}
                    </time>
                  </div>

                  <h3 className="card-title">
                    <a href={post.link}>{post.title}</a>
                  </h3>

                  <a href={post.link} className="btn-link">
                    <span>Read More</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default BlogSection;
