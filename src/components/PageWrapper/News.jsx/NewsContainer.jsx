import React from "react";
import { connect } from "react-redux";
import News from "./News";
import { getNews } from "../../../redux-toolkit/slices/newsSlice";

class NewsContainer extends React.Component {

    componentDidMount() {
        this.props.getNews();
        document.title = 'Новости'
    }

    render() {
        return (
            <News news={this.props.news} />
        )
    }
};

const mapStateToProps = (state) => {
    return ({
        news: state.newsPage.news,
    })
}

export default connect(mapStateToProps, {getNews})(NewsContainer)