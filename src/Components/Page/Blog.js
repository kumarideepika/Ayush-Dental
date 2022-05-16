import React, { Component } from 'react'
import Banner from '../Banner';
import SectionTitleOne from '../SectionTitleOne'
import BlogCard from '../Blog/BlogCard';
import BlogData from '../Data/BlogData';


class Blog extends Component {
    render() {

        return (
            <React.Fragment>
                <Banner pageTitle='Blog List' />

                <section className="blog-wrapper blog-one section-padding">
                    <div className="container">
                        <SectionTitleOne BigTitle="Blog" />
                        <div className="row">

                            <BlogCard BlogData={BlogData} />

                        </div>
                        <div className="row">
                            <div className="col-12 col-lg-12 text-center">
                                <div className="blog-page-nav mt-80 blog-pages-link">
                                    <ul>
                                        <li><a href=".#">01</a></li>
                                        <li><a href=".#">02</a></li>
                                        <li><a href=".#">03</a></li>
                                        <li><a href=".#">04</a></li>
                                        <li>
                                            <a href=".#"><i className="fal fa-angle-right" /></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        )
    }
}

export default Blog
