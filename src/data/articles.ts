/**
 * VANTAROOT BLOG DATA
 * -------------------
 * To publish a blog: find its entry below, set status to "published",
 * and fill in `blocks`. The page renders everything automatically.
 *
 * BLOCK TYPES
 *   { type: "section", number: "01", title: "Heading" }
 *   { type: "p", text: "A paragraph." }
 *   { type: "code", code: `commands here` }
 *   { type: "image", src: "/blogs/x/1.png", alt: "...", caption: "..." }
 *   { type: "list", title: "Optional title", items: ["one", "two"] }
 *   { type: "note", text: "Callout / disclaimer" }
 */
export type Block =
  | { type: "section"; number: string; title: string }
  | { type: "p"; text: string }
  | { type: "code"; code?: string; text?: string; language?: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "list"; title?: string; items: string[] }
  | { type: "link"; text: string; href: string }
  | { type: "note"; text: string };;

export type Article = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string; // card image on the /blogs index (path inside /public)
  tags: string[];
  status: "published" | "soon";
  blocks: Block[];
};

export const articles: Article[] = [
  /* ───────────────────────── 1. IP CAMERA ───────────────────────── */
  {
    slug: "ip-camera-hacking",
    title: "IP Camera Hacking",
    category: "Connected Devices",
    description:
      "Investigating IP camera reconnaissance, vulnerabilities, and defensive hardening.",
    image: "/blogs/camera/camera1.png",
    tags: ["IP Camera", "Eyesharvester", "Kali Linux"],
    status: "published",
    blocks: [
      {
        type: "image",
        src: "/blogs/camera/camera1.png",
        alt: "IP camera security research introduction",
        caption: "01 / Understanding the IP camera attack surface.",
      },

      { type: "section", number: "01", title: "Understanding IP Camera Hacking" },
      {
        type: "p",
        text: "IP camera compromises commonly involve unpatched firmware, weak or default credentials, and insecure network configurations. These devices are specialized computers connected to networks and may expose video feeds, sensitive information, or internal services if improperly secured.",
      },
      {
        type: "p",
        text: "A compromised camera can also create risks beyond surveillance privacy. Depending on its privileges and network access, it may provide a foothold for further attacks against connected systems.",
      },

      { type: "section", number: "02", title: "Introducing Eyesharvester" },
      {
        type: "p",
        text: "Eyesharvester is a reconnaissance tool for IP cameras, digital video recorders (DVRs), and network video recorders (NVRs). It scans specified IP ranges for common ports, fingerprints device vendors, and can optionally check credentials.",
      },
      {
        type: "p",
        text: "It can also identify potentially relevant CVEs and provide hardening recommendations. Its primary role is device identification and security reporting.",
      },
      {
        type: "image",
        src: "/blogs/camera/camera2.png",
        alt: "Eyesharvester reconnaissance tool",
        caption: "02 / Introducing Eyesharvester.",
      },

      { type: "section", number: "03", title: "Installing Eyesharvester" },
      {
        type: "p",
        text: "In a Kali Linux research environment, clone the repository and follow its installation instructions. Review installation scripts before executing them.",
      },
      {
        type: "code",
        code: `git clone https://github.com/Exhunterx/eyesharvester.git
cd eyesharvester
bash install.sh`,
      },
      {
        type: "image",
        src: "/blogs/camera/camera3.png",
        alt: "Eyesharvester installation",
        caption: "03 / Setting up the research environment.",
      },

      { type: "section", number: "04", title: "Exploring the Available Options" },
      {
        type: "p",
        text: "After installation, use the help menu to review the available arguments, confirmation settings, and reporting features before beginning an authorized assessment.",
      },
      { type: "code", code: `eyesharvester --help` },
      {
        type: "image",
        src: "/blogs/camera/camera4.png",
        alt: "Eyesharvester help menu",
        caption: "04 / Reviewing command-line options.",
      },

      { type: "section", number: "05", title: "Discovering Network Cameras" },
      {
        type: "p",
        text: "Define an IP range that belongs to your lab or is explicitly included in your assessment authorization. Eyesharvester examines reachable hosts for services and characteristics associated with cameras and recording devices.",
      },
      { type: "code", code: `eyesharvester <authorized-IP-range>` },
      {
        type: "image",
        src: "/blogs/camera/camera5.png",
        alt: "IP camera discovery results",
        caption: "05 / Discovering devices within the authorized scope.",
      },

      { type: "section", number: "06", title: "Recording Discovery Results" },
      {
        type: "p",
        text: "Saving results helps administrators maintain a surveillance inventory, document exposed services, and track remediation. Treat discovered IP addresses as sensitive infrastructure data.",
      },
      {
        type: "code",
        code: `eyesharvester <authorized-IP-range> -q > cameras.txt
cat cameras.txt`,
      },
      {
        type: "image",
        src: "/blogs/camera/camera6.png",
        alt: "Saved camera inventory",
        caption: "06 / Recording results for inventory and reporting.",
      },

      { type: "section", number: "07", title: "Confirming Camera Devices" },
      {
        type: "p",
        text: "Initial discovery can produce uncertain matches. A confirmation scan helps determine which discovered hosts are actually cameras, reducing false positives in the final report.",
      },
      { type: "code", code: `eyesharvester <authorized-IP-range> -c confirmed -v` },
      {
        type: "image",
        src: "/blogs/camera/camera7.png",
        alt: "Camera verification results",
        caption: "07 / Confirming discovered camera devices.",
      },

      { type: "section", number: "08", title: "Checking Credential Security" },
      {
        type: "p",
        text: "Factory-default and weak credentials are common risks in surveillance environments. Administrators should replace default passwords, remove unused accounts, and enforce unique credentials.",
      },
      {
        type: "p",
        text: "Eyesharvester supports optional credential checks. Run these checks only on devices you are authorized to assess, using approved testing procedures.",
      },
      { type: "code", code: `eyesharvester <authorized-IP-range> --check-creds` },
      {
        type: "image",
        src: "/blogs/camera/camera8.png",
        alt: "Camera credential security assessment",
        caption: "08 / Investigating authentication security.",
      },

      { type: "section", number: "09", title: "Hardening IP Cameras" },
      {
        type: "p",
        text: "Identifying vulnerabilities is only half the job. Penetration testers and defenders should provide practical recommendations to prevent unauthorized access and protect connected networks.",
      },
      {
        type: "p",
        text: "Eyesharvester can generate hardening guidance based on device information and exposed ports. Verify each recommendation against the actual device model, firmware version, and vendor advisory.",
      },
      {
        type: "image",
        src: "/blogs/camera/camera9.png",
        alt: "IP camera hardening recommendations",
        caption: "09 / Reviewing security hardening guidance.",
      },
      {
        type: "list",
        title: "Essential hardening measures",
        items: [
          "Replace default credentials with strong, unique passwords.",
          "Update firmware using the manufacturer security guidance.",
          "Isolate cameras from business and IT networks.",
          "Disable unnecessary services and restrict management access.",
          "Remove unnecessary direct internet exposure.",
          "Monitor traffic and document remediation activities.",
        ],
      },

      { type: "section", number: "10", title: "Understanding CVE-2021-36260" },
      {
        type: "p",
        text: "CVE-2021-36260 is a command-injection vulnerability affecting certain Hikvision products. Successful exploitation of an affected, unpatched device can permit remote command execution.",
      },
      {
        type: "p",
        text: "A compromised camera may potentially be used to reach other systems, depending on its privileges and network connectivity. This is one reason surveillance devices should be isolated and protected from unnecessary access.",
      },
      {
        type: "p",
        text: "Confirm the precise model, firmware version, and applicable vendor advisory before determining whether a device is vulnerable. Apply the appropriate vendor security updates.",
      },

      { type: "section", number: "11", title: "Summary" },
      {
        type: "p",
        text: "IP camera security research involves more than finding exposed devices. Eyesharvester can assist with reconnaissance, device identification, potential weakness discovery, and hardening recommendations.",
      },
      {
        type: "p",
        text: "Understanding offensive techniques alongside defensive practices helps security researchers protect surveillance infrastructure and connected networks. Further research can explore device-specific vulnerabilities, authentication, network segmentation, and remediation in an isolated lab.",
      },
    ],
  },

  /* ───────────────────────── 2. WI-FI ───────────────────────── */
{
  slug: "wifi-hacking",
  title: "Wi-Fi Hacking",
  category: "Wireless Security",
  description:
    "Wireless security research covering Wi-Fi protocols, WPA2 password auditing, and evil-twin access point detection.",
  image: "/wifi.png",
  tags: ["Wi-Fi", "WPA2", "Aircrack-ng", "Evil Twin"],
  status: "published",
  blocks: [
    { type: "section", number: "01", title: "Introduction to Wi-Fi Security" },
    {
      type: "p",
      text: "Wi-Fi connects devices through wireless access points, making network connectivity convenient but introducing security challenges that require careful investigation. Wireless security research examines authentication, encryption, network configuration, and the ways attackers may attempt to exploit weaknesses. This VantaRoot research article explores these concepts through authorized lab testing and defensive analysis."
    },
    {
      type: "p",
      text: "The goal is to understand how wireless networks are protected, how common attack techniques work, and how administrators can identify and mitigate weaknesses. All practical testing should be limited to networks you own or have explicit permission to assess."
    },

    { type: "section", number: "02", title: "Understanding Wi-Fi Security Protocols" },
    {
      type: "p",
      text: "WEP was an early wireless security protocol that is now considered insecure because of fundamental weaknesses in its encryption design. WPA improved upon WEP, while WPA2 introduced stronger protection using AES-based CCMP in common configurations. WPA3 adds further security improvements, including stronger password-based authentication through SAE."
    },
    {
      type: "p",
      text: "A protocol alone does not guarantee a secure network. Password strength, router configuration, firmware updates, authentication settings, and the devices connected to the network all influence the overall security posture."
    },

    { type: "section", number: "03", title: "WPA2 Password Auditing" },
    {
      type: "p",
      text: "WPA2-Personal commonly uses a pre-shared passphrase. During authentication, the client and access point perform a four-way handshake to derive and confirm session keys. A captured handshake does not directly reveal the Wi-Fi password, but it may allow offline password guesses to be tested."
    },
    {
      type: "p",
      text: "Password auditing evaluates whether a passphrase is vulnerable to guessing based on its length, uniqueness, and predictability. Tools such as Aircrack-ng are used in authorized wireless assessments to analyze captures and test candidate passwords. The effectiveness of an offline guessing attack depends heavily on the passphrase and the available candidate guesses."
    },
    {
      type: "p",
      text: "VantaRoot's Wi-Fi Security Research writeup explores wireless security concepts and protocol analysis in more detail."
    },
    {
      type: "link",
      text: "Read the VantaRoot Wi-Fi Security Research writeup",
      href: "https://vantaroot.vercel.app/writeups/wifi-security-research"
    },

    { type: "section", number: "04", title: "The Four-Way Handshake" },
    {
      type: "p",
      text: "The WPA2 four-way handshake helps a client and an access point confirm possession of the required key material and establish session keys. The exchange uses nonces and message integrity checks to derive and confirm the keys without transmitting the passphrase itself over the air."
    },
    {
      type: "p",
      text: "In a controlled lab, researchers can observe authentication traffic and learn how handshake captures are represented in packet-analysis tools. Capturing a handshake is not the same as recovering a password, and a weak password is generally more susceptible to offline guessing than a long, unique passphrase."
    },

    { type: "section", number: "05", title: "Evil Twin Access Points" },
    {
      type: "p",
      text: "An evil twin is a rogue wireless access point designed to impersonate or closely resemble a legitimate network. Similar network names, misleading captive portals, and stronger apparent signal strength can cause users to connect to the wrong access point."
    },
    {
      type: "p",
      text: "Detection involves checking the access point's BSSID, security configuration, channel, and other network characteristics against trusted records. A matching SSID alone does not prove that an access point is legitimate. Enterprise environments can strengthen detection with wireless intrusion detection systems and managed access-point monitoring."
    },
    {
      type: "p",
      text: "VantaRoot demonstrates the defensive investigation of suspicious access points in its evil-twin detection writeup."
    },
    {
      type: "link",
      text: "Read the VantaRoot Evil Twin Access Point Detection writeup",
      href: "https://vantaroot.vercel.app/writeups/evil-twin-access-point-detection"
    },

    { type: "section", number: "06", title: "Building an Authorized Wireless Lab" },
    {
      type: "p",
      text: "A suitable research lab can include Kali Linux, a compatible wireless adapter, a test router, and a secondary client device. Keep the environment under your control and use a dedicated test network. Packet-analysis tools such as Wireshark can help you inspect authentication exchanges and understand wireless traffic."
    },
    {
      type: "p",
      text: "Begin by documenting the router's security configuration, observing normal connections, and comparing results after making one controlled configuration change. Avoid testing against nearby networks or disconnecting other users."
    },

    { type: "section", number: "07", title: "Defensive Recommendations" },
    {
      type: "p",
      text: "Use WPA3-Personal where supported, or WPA2-AES with a strong, unique passphrase when WPA3 is unavailable. Disable WEP, legacy WPA, and WPS where possible. Keep router firmware updated, replace default administrator credentials, and separate guest devices from sensitive systems."
    },
    {
      type: "p",
      text: "To reduce evil-twin risks, verify network identity, avoid entering credentials into unexpected captive portals, disable automatic joining of untrusted open networks, and use properly validated HTTPS connections. Organizations should monitor for unauthorized access points and provide clear guidance for reporting suspicious wireless networks."
    },

    { type: "section", number: "08", title: "Conclusion" },
    {
      type: "p",
      text: "Wi-Fi security research combines protocol knowledge, careful observation, controlled testing, and effective defense. Understanding WPA2 authentication and rogue access point behavior helps researchers identify weaknesses and recommend practical improvements. VantaRoot's wireless research series aims to develop these skills responsibly through documented investigations and authorized lab experiments."
    }
  ]
},

  /* ───────────────────────── 3. BLUETOOTH ───────────────────────── */
  {
    slug: "bluetooth-hacking",
    title: "Bluetooth Hacking",
    category: "Bluetooth Security",
    description: "Bluetooth protocols, pairing, and connected-device security.",
    image: "/bluetooth.png",
    tags: ["Bluetooth", "BLE", "Kali Linux"],
    status: "soon",
    blocks: [],
  },

  /* ───────────────────────── 4. CAR ───────────────────────── */

{
  slug: "automobile-hacking-icsim-part-01",
  title: "Automobile Hacking: The ICSim Simulator — Part 01",
  category: "Automotive Security",
  description:
    "Set up the ICSim CAN bus simulator on Kali Linux and explore a virtual vehicle dashboard and controller.",
  image: "/car.png",
  tags: ["Automotive Security", "CAN Bus", "ICSim", "Kali Linux"],
  status: "published",
  blocks: [
    {
      type: "section",
      number: "01",
      title: "Introduction",
    },
    {
      type: "p",
      text: "This CAN bus simulator was developed by Craig Smith of OpenGarages, author of The Car Hacker's Handbook, published by No Starch Press. ICSim provides a simulated vehicle environment for learning about automotive network communication and security research.",
    },

    {
      type: "section",
      number: "02",
      title: "Step 1 — Install Dependencies",
    },
    {
      type: "p",
      text: "First, install the SDL2 development libraries required by the simulator on Kali Linux.",
    },
    {
      type: "code",
      language: "bash",
      text: "sudo apt-get update\nsudo apt-get install libsdl2-dev libsdl2-image-dev -y",
    },
    {
      type: "image",
      src: "/blogs/car/car1.png",
      alt: "Installing SDL2 dependencies on Kali Linux",
    },

    {
      type: "section",
      number: "03",
      title: "Step 2 — Install CAN Utils",
    },
    {
      type: "p",
      text: "CAN utilities provide Linux command-line tools for working with Controller Area Network interfaces and observing CAN traffic. Install the package from the Kali repository if it is not already available on your system.",
    },
    {
      type: "code",
      language: "bash",
      text: "sudo apt-get install can-utils -y",
    },
    {
      type: "image",
      src: "/blogs/car/car1.png",
      alt: "CAN utilities installation reference",
    },

    {
      type: "section",
      number: "04",
      title: "Step 3 — Download ICSim",
    },
    {
      type: "p",
      text: "Clone the ICSim project from its GitHub repository.",
    },
    {
      type: "code",
      language: "bash",
      text: "git clone https://github.com/zombieCraig/ICSim.git",
    },
    {
      type: "image",
      src: "/blogs/car/car2.png",
      alt: "Downloading the ICSim project",
    },
    {
      type: "p",
      text: "Move into the newly created ICSim directory.",
    },
    {
      type: "code",
      language: "bash",
      text: "cd ICSim",
    },
    {
      type: "image",
      src: "/blogs/car/car3.png",
      alt: "ICSim project directory",
    },

    {
      type: "section",
      number: "05",
      title: "Step 4 — Configure the Virtual CAN Interface",
    },
    {
      type: "p",
      text: "The project includes a setup_vcan.sh script that configures a virtual CAN interface named vcan0. The script uses Linux CAN modules and networking tools to prepare the local interface for simulator traffic.",
    },
    {
      type: "p",
      text: "Inspect the script before running it, then execute it with the required permissions.",
    },
    {
      type: "code",
      language: "bash",
      text: "sed -n '1,200p' setup_vcan.sh\nsudo ./setup_vcan.sh",
    },
    {
      type: "image",
      src: "/blogs/car/car4.png",
      alt: "Configuring the virtual CAN interface",
    },

    {
      type: "section",
      number: "06",
      title: "Step 5 — Launch the Simulated Vehicle",
    },
    {
      type: "p",
      text: "Start the ICSim instrument panel using the virtual CAN interface name. The dashboard displays simulated vehicle indicators, including a speedometer, turn signals, and door states.",
    },
    {
      type: "code",
      language: "bash",
      text: "./icsim vcan0",
    },
    {
      type: "image",
      src: "/blogs/car/car4.png",
      alt: "ICSim simulated vehicle dashboard",
    },

    {
      type: "section",
      number: "07",
      title: "Step 6 — Launch the Controller",
    },
    {
      type: "p",
      text: "Open a second terminal in the ICSim directory and start the controller. It communicates through the same virtual CAN interface as the dashboard.",
    },
    {
      type: "code",
      language: "bash",
      text: "./controls vcan0",
    },
    {
      type: "image",
      src: "/blogs/car/car5.png",
      alt: "Starting the ICSim controller",
    },
    {
      type: "p",
      text: "The controller window should appear on the desktop.",
    },
    {
      type: "image",
      src: "/blog/car/car6.png",
      alt: "ICSim controller window",
    },
    {
      type: "p",
      text: "If a compatible game controller is connected, it may be used to operate the simulation. Otherwise, use the keyboard mappings documented by the ICSim project.",
    },
    {
      type: "image",
      src: "/blog/car/car7.png",
      alt: "ICSim controller input reference",
    },

    {
      type: "section",
      number: "08",
      title: "Conclusion",
    },
    {
      type: "p",
      text: "ICSim provides a virtual environment for learning about CAN communication, observing simulated vehicle behavior, and beginning automotive security research. This setup uses a virtual CAN interface rather than a real vehicle, making it suitable for controlled experimentation on your own system.",
    },
  ],
},


  /* ───────────────────────── 5. MAC ADDRESS TRACING ───────────────────────── */
  {
    slug: "mac-address-tracing",
    title: "Mac Address Tracing",
    category: "Tracing",
    description:
      "How MAC addresses are observed, tracked and randomised, and what that means for device privacy.",
    image: "/mac address.png",
    tags: ["MAC Address", "Tracing", "Privacy"],
    status: "soon",
    blocks: [],
  },

  /* ───────────────────────── 6. SATELLITE ───────────────────────── */
  {
    slug: "satellite-hacking",
    title: "Satellite",
    category: "Satellite Communications Security",
    description:
      "Satellite communication systems, radio technologies and their security boundaries.",
    image: "/satellite.png",
    tags: ["Satellite", "RF", "SDR"],
    status: "soon",
    blocks: [],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}