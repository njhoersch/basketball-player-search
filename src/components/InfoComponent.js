import { React } from "react";
import "./InfoComponent.css";

import SearchPlayerService from "../services/SearchPlayerService";

const InfoComponent = (props) => {
    const teamName = props.player.teamId
        ? SearchPlayerService.getTeamNameFromId(props.player.teamId)
        : "";
    const playerImageUrl = props.player.personId
        ? "https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/" +
          props.player.personId +
          ".png"
        : null;
    return (
        <div className="width">
            {props.found.found && props.found.searched && (
                <div className="info-display">
                    <div className="player-info">Player Info:</div>
                    <div className="name">
                        First Name: {props.player.firstName}
                    </div>
                    <div className="name">
                        Last Name: {props.player.lastName}
                    </div>
                    <div className="name">Team Name: {teamName}</div>
                    <div className="name">
                        Jersey Num: {props.player.jersey}
                    </div>
                    {playerImageUrl && (
                        <img
                            className="image"
                            src={playerImageUrl}
                            height="190px"
                            width="260px"
                        ></img>
                    )}
                </div>
            )}
            {props.found.searched && !props.found.found && (
                <div className="info-display error">
                    <div>No Match Found</div>
                </div>
            )}
        </div>
    );
};

export default InfoComponent;
