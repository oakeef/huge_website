import React from "react";
import "./HostsSection.css";
import Host from "../Host/Host.js";

export default function HostsSection() {
    return (
        <div className="hostsSectionContainer">
            <h2>Meet the HUGE Crew</h2>
            <Host />
        </div>
    );
}
