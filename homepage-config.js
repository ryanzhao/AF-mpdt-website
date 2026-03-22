// Edit this file for the simplest homepage updates.
// 1. Put your setup image in media-library/images/
// 2. Change hero.image to that filename
// 3. Move hotspot x/y values until labels sit on the right hardware

window.AFMPDTHomepageConfig = {
  hero: {
    image: "media-library/images/setup-overview-main-01.jpg",
    alt: "Integrated AF-MPDT experimental platform overview",
    fit: "contain",
    position: "center",
    label: "Integrated bench",
    title: "AF-MPDT experimental platform",
    caption: "Bench-level overview of the chamber, power path, controls, and diagnostics stack used throughout the current AF-MPDT build.",
    hotspots: [
      {
        x: 18,
        y: 24,
        label: "Power",
        title: "Power and protection hardware",
        description: "Power conversion, protection, and current-path hardware for ignition and steady discharge tests."
      },
      {
        x: 56,
        y: 34,
        label: "Thruster",
        title: "Chamber and thruster assembly",
        description: "Vacuum chamber, discharge hardware, and alignment structure for AF-MPDT assembly and testing."
      },
      {
        x: 76,
        y: 62,
        label: "DAQ",
        title: "Control and data acquisition",
        description: "Operator panel, monitoring, and DAQ hardware for synchronized subsystem control and logging."
      }
    ]
  },
  gallery: [
    {
      src: "media-library/images/experimental-platform-rack-front-01.jpg",
      alt: "Integrated AF-MPDT rack overview",
      title: "Integrated platform",
      description: "Rack-level integration of the chamber, control panel, power hardware, and monitoring stack."
    },
    {
      src: "media-library/images/vacuum-tube-thruster-assembly-01.jpg",
      alt: "Transparent tube thruster assembly",
      title: "Transparent chamber assembly",
      description: "Bench-level transparent tube configuration used for alignment, wiring, and subsystem fit checks."
    },
    {
      src: "media-library/images/control-panel-faceplate-layout-01.jpg",
      alt: "Control panel faceplate layout",
      title: "Control panel layout",
      description: "Faceplate machining and control I/O layout before final operator-panel assembly."
    }
  ],
  video: {
    title: "Project video",
    description: "Add an mp4 or webm file into media-library/videos and update the path below.",
    poster: "media-library/images/video-poster.svg",
    mp4: "",
    webm: ""
  }
};
