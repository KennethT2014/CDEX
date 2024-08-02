import { NextPage } from "next";
import { Container, Row, Col } from "react-bootstrap";
import EmailAddress from "./email-address";
import styles from "./social-media-links.module.css";
import footerStyles from "./footer.css";

const Footer = () => {

  return (
    <>
    <footer>
    <div className="footer-section">
        <div className="footer-section-content">
            <div className="col">
                <a href="" className="footer-logo">CDEX</a>
                <ul>
                    {/* <li>
                        <svg id="sn-icon" xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em"
                            preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill="none" stroke="black" strokeLinecap="round" stroke-linejoin="round"
                                stroke-width="2"
                                d="M10.554 6.24L7.171 2.335c-.39-.45-1.105-.448-1.558.006L2.831 5.128c-.828.829-1.065 2.06-.586 3.047a29.207 29.207 0 0 0 13.561 13.58c.986.479 2.216.242 3.044-.587l2.808-2.813c.455-.455.456-1.174.002-1.564l-3.92-3.365c-.41-.352-1.047-.306-1.458.106l-1.364 1.366a.462.462 0 0 1-.553.088a14.557 14.557 0 0 1-5.36-5.367a.463.463 0 0 1 .088-.554l1.36-1.361c.412-.414.457-1.054.101-1.465Z" />
                        </svg>
                        <span>+505 7518 5635</span>
                    </li> */}
                    <li>
                        <a href="#">
                            <svg id="sn-icon" xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
                                <path fill="black"
                                    d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5l39.3-50.5l42.8 33.3h643.1l42.8-33.3l39.3 50.5l-27.7 21.5zM833.6 232L512 482L190.4 232l-42.8-33.3l-39.3 50.5l27.6 21.5l341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5l-39.3-50.5l-42.7 33.2z" />
                            </svg>
                            <span>cdex@cdex.com</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="col">
                <ul>
                    <li>
                        <a href="#">
                            <svg id="sn-icon" xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="black" fill-rule="evenodd"
                                    d="M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                        <svg id="sn-icon" xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em" viewBox="0 0 448 512">
                            <path fill="#000000" d="M64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zm297.1 84L257.3 234.6L379.4 396h-95.6L209 298.1L123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5l78.2-89.5zm-37.8 251.6L153.4 142.9h-28.3l171.8 224.7h26.3z"/></svg>
                            <span>Twitter</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg id="sn-icon" xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="black" fill-rule="evenodd"
                                    d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511Zm8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379Zm-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986ZM8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996Zm10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89Z"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>Instagram</span>
                        </a>
                    </li>
                    {/* <li>
                        <a href="#">
                            <svg id="sn-icon" xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <g fill="none">
                                    <g clip-path="url(#svgIDa)">
                                        <path fill="black"
                                            d="M23.5 6.507a2.786 2.786 0 0 0-.766-1.27a3.05 3.05 0 0 0-1.338-.742C19.518 4 11.994 4 11.994 4a76.624 76.624 0 0 0-9.39.47a3.16 3.16 0 0 0-1.338.76c-.37.356-.638.795-.778 1.276A29.09 29.09 0 0 0 0 12c-.012 1.841.151 3.68.488 5.494c.137.479.404.916.775 1.269c.371.353.833.608 1.341.743c1.903.494 9.39.494 9.39.494a76.8 76.8 0 0 0 9.402-.47a3.05 3.05 0 0 0 1.338-.742a2.78 2.78 0 0 0 .765-1.27A28.38 28.38 0 0 0 24 12.023a26.579 26.579 0 0 0-.5-5.517ZM9.602 15.424V8.577l6.26 3.424l-6.26 3.423Z" />
                                    </g>
                                    <defs>
                                        <clipPath id="svgIDa">
                                            <path fill="#fff" d="M0 0h24v24H0z" />
                                        </clipPath>
                                    </defs>
                                </g>
                            </svg>
                            <span>YouTube</span>
                        </a>
                    </li> */}
                </ul>
            </div>
            <div className="col">
                <ul>
                    <li>
                        <a href="#">
                            <svg id="sn-icon" xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <g fill="none" fill-rule="evenodd">
                                    <path d="M0 0h24v24H0z" />
                                    <path fill="black"
                                        d="M19.777 4.43a1.5 1.5 0 0 1 2.062 1.626l-2.268 13.757c-.22 1.327-1.676 2.088-2.893 1.427c-1.018-.553-2.53-1.405-3.89-2.294c-.68-.445-2.763-1.87-2.507-2.884c.22-.867 3.72-4.125 5.72-6.062c.785-.761.427-1.2-.5-.5c-2.303 1.738-5.998 4.381-7.22 5.125c-1.078.656-1.64.768-2.312.656c-1.226-.204-2.363-.52-3.291-.905c-1.254-.52-1.193-2.244-.001-2.746l17.1-7.2Z" />
                                </g>
                            </svg>
                            <span>Telegram</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg id="sn-icon" xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                                <path fill="black" fill-rule="evenodd"
                                    d="M17.415 14.382c-.298-.149-1.759-.867-2.031-.967c-.272-.099-.47-.148-.669.15c-.198.296-.767.966-.94 1.164c-.174.199-.347.223-.644.075c-.297-.15-1.255-.463-2.39-1.475c-.883-.788-1.48-1.761-1.653-2.059c-.173-.297-.019-.458.13-.606c.134-.133.297-.347.446-.52c.149-.174.198-.298.297-.497c.1-.198.05-.371-.025-.52c-.074-.149-.668-1.612-.916-2.207c-.241-.579-.486-.5-.668-.51c-.174-.008-.372-.01-.57-.01c-.198 0-.52.074-.792.372c-.273.297-1.04 1.016-1.04 2.479c0 1.462 1.064 2.875 1.213 3.074c.149.198 2.095 3.2 5.076 4.487c.71.306 1.263.489 1.694.625c.712.227 1.36.195 1.872.118c.57-.085 1.758-.719 2.006-1.413c.247-.694.247-1.289.173-1.413c-.074-.124-.272-.198-.57-.347Zm-5.422 7.403h-.004a9.87 9.87 0 0 1-5.032-1.378l-.36-.214l-3.742.982l.999-3.648l-.235-.374a9.861 9.861 0 0 1-1.511-5.26c.002-5.45 4.436-9.884 9.889-9.884c2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.892 6.993c-.002 5.45-4.436 9.885-9.884 9.885Zm8.412-18.297A11.815 11.815 0 0 0 11.992 0C5.438 0 .102 5.335.1 11.892a11.864 11.864 0 0 0 1.587 5.945L0 24l6.304-1.654a11.881 11.881 0 0 0 5.684 1.448h.005c6.554 0 11.89-5.335 11.892-11.893a11.821 11.821 0 0 0-3.48-8.413"
                                    clip-rule="evenodd" />
                            </svg>
                            <span>WhatsApp</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <svg id="sn-icon" xmlns="http://www.w3.org/2000/svg" width="1.75em" height="1.75em"
                                preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16">
                                <path fill="black"
                                    d="m6.08.234l.179.727a7.264 7.264 0 0 0-2.01.832l-.383-.643A7.9 7.9 0 0 1 6.079.234zm3.84 0L9.742.96a7.265 7.265 0 0 1 2.01.832l.388-.643A7.957 7.957 0 0 0 9.92.234zm-8.77 3.63a7.944 7.944 0 0 0-.916 2.215l.727.18a7.264 7.264 0 0 1 .832-2.01l-.643-.386zM.75 8a7.3 7.3 0 0 1 .081-1.086L.091 6.8a8 8 0 0 0 0 2.398l.74-.112A7.262 7.262 0 0 1 .75 8zm11.384 6.848l-.384-.64a7.23 7.23 0 0 1-2.007.831l.18.728a7.965 7.965 0 0 0 2.211-.919zM15.251 8c0 .364-.028.727-.082 1.086l.74.112a7.966 7.966 0 0 0 0-2.398l-.74.114c.054.36.082.722.082 1.086zm.516 1.918l-.728-.18a7.252 7.252 0 0 1-.832 2.012l.643.387a7.933 7.933 0 0 0 .917-2.219zm-6.68 5.25c-.72.11-1.453.11-2.173 0l-.112.742a7.99 7.99 0 0 0 2.396 0l-.112-.741zm4.75-2.868a7.229 7.229 0 0 1-1.537 1.534l.446.605a8.07 8.07 0 0 0 1.695-1.689l-.604-.45zM12.3 2.163c.587.432 1.105.95 1.537 1.537l.604-.45a8.06 8.06 0 0 0-1.69-1.691l-.45.604zM2.163 3.7A7.242 7.242 0 0 1 3.7 2.163l-.45-.604a8.06 8.06 0 0 0-1.691 1.69l.604.45zm12.688.163l-.644.387c.377.623.658 1.3.832 2.007l.728-.18a7.931 7.931 0 0 0-.916-2.214zM6.913.831a7.254 7.254 0 0 1 2.172 0l.112-.74a7.985 7.985 0 0 0-2.396 0l.112.74zM2.547 14.64L1 15l.36-1.549l-.729-.17l-.361 1.548a.75.75 0 0 0 .9.902l1.548-.357l-.17-.734zM.786 12.612l.732.168l.25-1.073A7.187 7.187 0 0 1 .96 9.74l-.727.18a8 8 0 0 0 .736 1.902l-.184.79zm3.5 1.623l-1.073.25l.17.731l.79-.184c.6.327 1.239.574 1.902.737l.18-.728a7.197 7.197 0 0 1-1.962-.811l-.007.005zM8 1.5a6.502 6.502 0 0 0-6.498 6.502a6.516 6.516 0 0 0 .998 3.455l-.625 2.668L4.54 13.5a6.502 6.502 0 0 0 6.93-11A6.516 6.516 0 0 0 8 1.5" />
                            </svg>
                            <span>Signal</span>
                        </a>
                    </li>
                </ul>
            </div>
            {/* <div className="col">
                <ul>
                    <li>
                        <a href="#">
                            <span>Services</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>Contact us</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <span>About us</span>
                        </a>
                    </li>
                   
                </ul>
            </div> */}
        </div>
    </div>
</footer>

<div className="copyright">
    <div className="copyright-content">
        <p>&#169; 2024 CDEX | All rights reserved</p>
    </div>
</div>
</>
  )
}

export default Footer;
