import React, { Component } from 'react'
import Banner from '../Banner';
import BlogData from '../Data/BlogData';
import RecentPost from '../Blog/RecentPost';

class BlogDetails extends Component {

    render() {

        return (
            <React.Fragment>
                <Banner pageTitle='Single Blog Details' />
                <section className="blog-main-wrapper section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-sm-12">
                                <div className="single-blog-details">
                                    <img className="featured-thubnail" src={require("../../assets/img/featured-img.jpg")} alt="blog" />
                                    <h1>Are Your Teeth Making You Old? You Might Be Surprised</h1>
                                    <div className="post-meta">
                                        <span className="p-date"><strong>Date:</strong>15 June 2019</span>
                                        <span className="p-author"><strong>posted by:</strong>Puchka Bolle</span>
                                    </div>
                                    <p>Aenean non accumsan ante. Duis et risus accumsan sem tempus porta nec sit amet est. Sed ut euismod quam. Suspendisse potenti. Aliquam fringilla orci tincidunt, ullamcorper erat in, malesuada metus. Vivamus luctus maximus vestibulum. Donec et enim vitae tellus auctor ornare. Aenean leo diam, feugiat sed nulla sed, consequat venenatis est. Praesent commodo consequat pharetra. Fusce fermentum ante ac metus interdum elementum. Nam arcu lectus, lacinia non augue a, mollis bibendum augue.</p>
                                    <blockquote>
                                        “sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.”
                        <span>-Rajib Lool</span>
                                    </blockquote>
                                    <p>All the functionality, including menus, links and forms should work using a keyboard only. This is essential for all assistive technology to work properly. Veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enimam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntu.</p>
                                </div>
                                <div className="post-tags-cate-section row">
                                    <div className="col-12 col-md-6">
                                        <span>Tags:</span>
                                        <a href=".#">alignment</a>
                                        <a href=".#">Articles</a>
                                        <a href=".#">captions</a>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <span>Categories:</span>
                                        <a href=".#">aciform</a>
                                        <a href=".#">arrangement</a>
                                    </div>
                                </div> 
                                <div className="author-bio-section">
                                    <img src={require("../../assets/img/author-img.png")} alt="" />
                                    <h4><a href=".#">Walton De Singer</a></h4>
                                    <span>On the other hand, we denounce with righteous indignation and dislike men.</span>
                                </div>
                                <div className="related-blog-posts-section">
                                    <h1>You may like it</h1>
                                    <div className="row">
                                        <RecentPost BlogData={BlogData} />
                                    </div>
                                </div>

                                <div className="comment-template-section">
                                    <h3>Comments (05)</h3>
                                    <div className="comment-lists">
                                        <div className="single-comment">
                                            <img src={require("../../assets/img/comment1.png")} alt="" />
                                            <div className="commentor-info">
                                                <h5>Kendra Ratzlay</h5>
                                                <span>August 14, 2019  at 11:35pm</span>
                                            </div>
                                            <div className="comment-text">
                                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized</p>
                                                <a href=".#" className="btn-replay">reply</a>
                                            </div>
                                        </div>
                                        <div className="single-comment">
                                            <img src={require("../../assets/img/comment2.png")} alt="" />
                                            <div className="commentor-info">
                                                <h5>Salman Ahmed</h5>
                                                <span>August 14, 2019  at 11:35pm</span>
                                            </div>
                                            <div className="comment-text">
                                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized</p>
                                                <a href=".#" className="btn-replay">reply</a>
                                            </div>
                                        </div>
                                        <div className="single-comment replay">
                                            <img src={require("../../assets/img/comment1.png")} alt="" />
                                            <div className="commentor-info">
                                                <h5>Kendra Ratzlay</h5>
                                                <span>August 14, 2019  at 11:35pm</span>
                                            </div>
                                            <div className="comment-text">
                                                <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized</p>
                                                <a href=".#" className="btn-replay">reply</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-form-section">
                                    <div className="comment-form-top">
                                        <h3>Leave your thought</h3>
                                        <p>Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    <div className="contact-form-wraper comment-form">
                                        <form className="row">
                                            <div className="col-lg-6 col-12">
                                                <input type="text" placeholder="name" />
                                            </div>
                                            <div className="col-lg-6 col-12">
                                                <input type="email" placeholder="email" />
                                            </div>
                                            <div className="col-lg-12 col-12">
                                                <textarea name="comment" placeholder="comment" defaultValue={""} />
                                            </div>
                                            <div className="col-lg-12 col-12 radio-checked">
                                                <input type="radio" /> <span>Save my name, email, and website in this browser for the next time I comment.</span>
                                            </div>
                                            <button className="contact-submit-btn" type="submit">Submit</button>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-sm-12 sidebar-wrapper">
                                <div className="single-sidebar-widgets">
                                    <div className="search-form">
                                        <form action=".#">
                                            <input type="text" placeholder="Type Keyword" />
                                            <button type="submit"><i className="fal fa-search" /></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="single-sidebar-widgets">
                                    <h3>Popular Posts</h3>
                                    <div className="single-populer-post">
                                        <a href=".#">Business strategy consulting for inveytors dela</a>
                                        <span>15 June 2019</span>
                                    </div>
                                    <div className="single-populer-post">
                                        <a href=".#">Business strategy consulting for inveytors dela</a>
                                        <span>15 June 2019</span>
                                    </div>
                                    <div className="single-populer-post">
                                        <a href=".#">Business strategy consulting for inveytors dela</a>
                                        <span>15 June 2019</span>
                                    </div>
                                    <div className="single-populer-post">
                                        <a href=".#">Business strategy consulting for inveytors dela</a>
                                        <span>15 June 2019</span>
                                    </div>
                                </div>
                                <div className="single-sidebar-widgets">
                                    <h3>Recent Posts</h3>
                                    <div className="single-populer-post">
                                        <span>15 June 2019</span>
                                        <a href=".#">Business strategy consulting for inveytors dela</a>
                                        <p>Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula Quisque.</p>
                                    </div>
                                    <div className="single-populer-post">
                                        <span>15 June 2019</span>
                                        <a href=".#">Business strategy consulting for inveytors dela</a>
                                        <p>Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula Quisque.</p>
                                    </div>
                                    <div className="single-populer-post">
                                        <span>15 June 2019</span>
                                        <a href=".#">Business strategy consulting for inveytors dela</a>
                                        <p>Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula Quisque.</p>
                                    </div>
                                    <div className="single-populer-post">
                                        <span>15 June 2019</span>
                                        <a href=".#">Business strategy consulting for inveytors dela</a>
                                        <p>Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula Quisque.</p>
                                    </div>
                                </div>
                                <div className="single-sidebar-widgets">
                                    <h3>Tag Cloud</h3>
                                    <div className="tags-cloud">
                                        <a href=".#">typography</a>
                                        <a href=".#">color</a>
                                        <a href=".#">html</a>
                                        <a href=".#">wqordpress</a>
                                        <a href=".#">caption</a>
                                        <a href=".#">software</a>
                                        <a href=".#">featured</a>
                                        <a href=".#">envato</a>
                                        <a href=".#">social</a>
                                        <a href=".#">css</a>
                                    </div>
                                </div>
                                <div className="single-sidebar-widgets">
                                    <h3>Follow us</h3>
                                    <div className="social-links">
                                        <a href=".#"><i className="fab fa-facebook-f" /></a>
                                        <a href=".#"><i className="fab fa-twitter" /></a>
                                        <a href=".#"><i className="fab fa-linkedin-in" /></a>
                                        <a href=".#"><i className="fab fa-instagram" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default BlogDetails
