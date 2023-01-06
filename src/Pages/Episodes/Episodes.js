import React, { useState } from "react";
import "./Episodes.css";
import Episode from "../../Components/Episode/Episode";
import ReactPaginate from "react-paginate";

export default function Episodes(props) {
    const { podcastEpisodes, setSelectedEpisode } = props;

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentEpisodes = podcastEpisodes.slice(
        indexOfFirstPost,
        indexOfLastPost
    );
    const paginate = ({ selected }) => {
        setCurrentPage(selected + 1);
    };

    return (
        <div className="allEpsContainer">
            <h1 className="allEpsHeader">All Episodes </h1>
            <div className="allEpsGrid">
                {currentEpisodes.map((episode, i) => (
                    <Episode
                        key={i}
                        episode={episode}
                        setSelectedEpisode={setSelectedEpisode}
                    />
                ))}
                <ReactPaginate
                    onPageChange={paginate}
                    pageCount={Math.ceil(podcastEpisodes.length / postsPerPage)}
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    containerClassName={"pagination"}
                    pageLinkClassName={"page-number"}
                    previousLinkClassName={"prev"}
                    nextLinkClassName={"next"}
                    activeLinkClassName={"active"}
                />
            </div>
        </div>
    );
}
