import React from "react";
import "./HostsSection.css";
import Host from "../Host/Host.js";

export default function HostsSection() {
    return (
        <div className="hostsSectionContainer">
            <h2 className="hostsSectionBanner">Meet the HUGE Crew</h2>
            <div className="hostsContainer">
                <Host />
                <Host />
                <Host />
                <Host />
            </div>
        </div>
    );
}
