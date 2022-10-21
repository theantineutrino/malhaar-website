import React, { useState } from "react";
import Hackathon from "../components/Hackathon";
import Dropdown from "../ux/Dropdown";
function HackathonPage() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  return (
    <div>
      <Hackathon overlayOpen={overlayOpen} setOverlayOpen={setOverlayOpen} />
      <Dropdown overlayOpen={overlayOpen} setOverlayOpen={setOverlayOpen} />
    </div>
  );
}

export default HackathonPage;
