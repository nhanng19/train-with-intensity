import "./Newsletter.css";
import { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import Button from "../UI/Button";
import { useRef } from "react";
import emailjs from "emailjs-com";
const Newsletter = (props) => {
  const formRef = useRef();
  const referralRef = useRef();
  const socialRef = useRef();
  const emailRef = useRef();
  const [formIsValid, setFormIsValid] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredReferral = referralRef.current.value;
    const enteredSocial = socialRef.current.value;
    const enteredEmail = emailRef.current.value;
    if (
      enteredReferral.trim().length <= 3 ||
      enteredSocial.trim().length <= 3 ||
      enteredEmail.trim().length <= 3
    ) {
      setFormIsValid(false);
      return;
    }

    if (
      enteredReferral.trim().length !== 0 ||
      enteredSocial.trim().length !== 0 ||
      enteredEmail.trim().length !== 0
    ) {
      setFormIsValid(true);
      emailjs
        .sendForm(
          "service_ei1ag7c",
          "template_y7vj9bq",
          formRef.current,
          "JqU-AIwKYfyySIc52"
        )
        .then(
          (result) => {
            console.log(result.text);
            window.location.href =
              "https://drive.google.com/drive/u/0/folders/1JzONx6EtxNQXdW-DxoIVX0o5izLD8d47";
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };
  return (
    <>
      <div data-aos="fade-down" class="newsletter">
        <i onClick={props.onClick} class="fas fa-x"></i>
        <div class="container">
          <svg
            class="newsletterBuzy"
            width="640"
            height="133"
            viewBox="0 0 640 133"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              class="path1"
              d="M85.888 26.176C76.544 20.032 65.536 19.904 54.784 20.8C42.24 21.824 29.952 25.664 18.944 31.68C18.944 31.808 21.632 34.24 22.528 33.856C32.64 30.272 43.264 27.712 53.888 26.56C59.264 25.92 64.64 25.664 70.016 25.792C70.656 25.792 78.976 26.432 82.432 26.944C82.944 27.968 83.328 29.12 83.2 30.272C83.2 32.576 82.176 34.752 80.896 36.544C78.208 40.384 74.496 43.584 70.912 46.528C63.616 52.8 55.68 58.048 47.36 62.784C46.08 63.424 44.8 64.064 43.52 64.832C46.208 57.024 48.896 49.216 50.56 41.152C50.816 39.872 44.672 36.416 44.16 37.312C37.888 47.296 34.176 58.432 30.336 69.44C30.208 69.824 30.08 70.08 29.952 70.464C28.416 70.72 26.88 70.976 25.216 71.36C22.656 72 19.456 72.512 17.152 73.92C16.896 74.176 17.792 75.072 18.688 75.84C18.304 76.992 25.472 80.32 26.368 80.32C26.496 80.32 26.624 80.32 26.624 80.32C26.112 82.24 25.472 84.032 24.96 85.824C24.064 88.512 23.424 91.328 22.656 94.016C21.888 96.704 21.12 99.264 21.632 101.952C19.328 102.72 16.896 103.36 14.464 104C12.032 104.512 9.6 105.152 7.168 105.664C5.376 106.176 3.072 106.432 1.92 107.968C1.024 108.992 7.808 112.192 8.576 112.32C14.08 113.088 19.584 112.064 24.96 110.784C30.08 109.632 34.944 108.224 39.936 106.688C49.408 103.488 58.496 99.52 67.2 94.784C71.552 92.48 76.16 90.176 79.872 86.976C82.944 84.416 84.352 80.704 81.408 77.504C77.952 73.408 71.936 70.464 66.688 69.184C64.384 68.672 61.952 68.544 59.52 68.416C68.224 63.424 76.288 57.408 83.584 50.496C87.424 46.912 92.032 42.816 92.672 37.44C93.44 32.32 89.856 28.736 85.888 26.176ZM69.248 75.712C69.888 75.712 70.656 75.712 71.296 75.712C70.784 79.04 66.816 81.344 64.256 82.88C60.416 85.312 56.576 87.488 52.608 89.536C46.08 92.992 39.424 95.808 32.512 98.368C33.28 95.936 34.176 93.504 34.944 91.072C36.224 86.592 37.632 82.24 39.04 77.76C39.296 77.76 39.68 77.632 39.936 77.504C40.192 77.504 40.576 77.376 40.832 77.376C45.696 76.608 50.56 76.224 55.424 75.84C60.032 75.584 64.64 75.456 69.248 75.712ZM83.584 27.2C83.712 27.2 83.84 27.2 83.712 27.328C83.712 27.328 83.712 27.2 83.584 27.2Z"
              stroke="white"
              stroke-width="1"
              mask="url(#path-1-outside-1_4_8)"
            />
            <path
              class="path1"
              d="M113.466 99.008C119.482 89.92 123.578 79.424 126.65 69.056C128.442 62.912 129.722 56.768 130.746 50.496C131.642 44.352 133.306 37.184 131.002 31.296C130.618 30.144 124.986 26.304 123.962 27.456C122.17 29.12 121.914 31.296 121.53 33.472C121.146 36.032 120.762 38.464 120.378 41.024C119.738 45.888 118.714 50.624 117.69 55.36C115.386 64.96 112.314 74.176 108.09 83.008C106.042 87.232 103.866 91.712 100.922 95.296C99.77 96.704 98.362 97.856 96.698 98.624C95.93 94.912 96.314 90.688 96.442 86.848C96.57 81.728 96.954 76.608 97.722 71.488C99.386 59.968 102.074 48.32 105.658 37.312C105.914 36.288 100.794 33.472 100.41 34.24C97.338 39.104 94.138 44.224 92.218 49.728C90.298 55.104 88.762 60.608 87.738 66.24C86.714 71.872 85.946 77.504 85.818 83.264C85.562 87.488 85.178 92.608 87.354 96.576C89.914 101.184 96.698 105.024 101.69 105.792C106.938 106.56 110.778 102.976 113.466 99.008Z"
              stroke="white"
              stroke-width="1"
              mask="url(#path-1-outside-1_4_8)"
            />
            <path
              class="path1"
              d="M201.549 71.488C187.853 74.688 174.797 81.088 161.613 86.336C154.957 89.024 148.301 91.968 141.645 94.784C147.917 87.488 154.189 80.192 160.333 72.768C165.197 67.136 170.061 61.504 174.797 55.872C178.381 51.52 181.709 46.784 185.805 42.944C188.493 40.384 191.181 37.824 193.229 34.752C195.917 30.912 192.589 28.736 189.133 26.816C182.989 23.36 175.693 24.768 168.909 25.664C161.613 26.56 154.573 28.096 147.533 30.272C142.285 32.064 134.349 34.112 132.429 40.256C130.253 47.552 137.549 52.16 143.309 54.72C143.949 54.976 145.997 56 146.125 54.848C146.125 54.336 145.357 53.568 144.333 52.928C144.205 52.672 144.077 52.416 144.077 51.904C143.821 51.008 143.693 49.984 143.821 48.96C144.077 46.784 145.101 44.992 146.637 43.456C150.477 39.616 156.237 38.08 161.229 36.416C166.733 34.624 172.237 33.088 177.869 31.936C180.429 31.424 182.861 31.04 185.293 30.784C185.293 30.784 185.293 30.912 185.165 31.04C184.525 32.448 183.373 33.728 182.221 35.008C180.301 37.056 178.125 38.976 176.205 41.152C167.885 50.624 159.565 59.968 151.501 69.44C142.029 80.448 132.685 91.456 123.213 102.464C122.573 103.232 129.613 107.584 130.893 107.072C143.949 101.824 157.133 96.832 170.317 91.456C176.589 88.896 182.861 86.208 189.261 83.648C195.405 81.088 201.549 78.656 207.053 74.944C207.437 74.688 202.701 71.232 201.549 71.488Z"
              stroke="white"
              stroke-width="1"
              mask="url(#path-1-outside-1_4_8)"
            />
            <path
              class="path1"
              d="M256.128 1.34399C249.856 10.304 246.912 21.312 243.84 31.68C243.712 31.936 243.584 32.064 243.584 32.32C242.688 34.24 241.92 36.288 241.024 38.208C239.232 42.176 237.44 46.272 235.52 50.24C231.552 58.176 227.2 65.984 222.464 73.536C222.08 74.304 221.568 75.072 220.928 75.84C220.8 74.048 220.672 72.128 220.672 70.208C220.672 61.632 222.208 53.056 224.128 44.736C225.28 40 226.432 35.264 227.584 30.528C228.608 26.048 230.4 21.056 229.888 16.32C229.632 14.784 221.056 9.536 219.904 11.072C218.624 12.864 218.112 15.168 217.472 17.344C216.832 19.648 216.192 22.08 215.424 24.512C214.144 29.248 212.864 33.856 211.712 38.592C209.536 47.936 207.872 57.664 208.512 67.264C208.64 71.36 209.408 75.968 212.224 79.168C214.144 81.344 216.96 83.008 219.648 84.288C221.824 85.312 224.384 86.464 226.816 85.696C228.48 85.312 229.76 84.288 230.912 82.88C230.144 86.592 229.376 90.304 228.736 94.016C227.712 99.392 226.944 104.896 226.176 110.4C225.792 113.216 225.536 116.032 225.408 118.976C225.28 121.792 224.896 124.48 225.92 127.296C226.432 128.448 231.68 132.032 232.832 131.008C234.752 129.344 235.008 126.144 235.648 123.712C236.288 121.024 236.8 118.464 237.312 115.776C238.208 110.656 239.232 105.664 240.128 100.544C242.048 89.792 244.352 79.168 246.784 68.544C249.344 58.176 251.904 47.68 254.72 37.312C257.664 26.688 261.376 16.064 262.272 4.92799C262.4 3.77599 256.768 0.447998 256.128 1.34399Z"
              stroke="white"
              stroke-width="1"
              mask="url(#path-1-outside-1_4_8)"
            />
            <path
              class="path2"
              d="M340.656 18.496C331.312 14.4 320.56 15.68 310.832 17.216C304.688 18.112 298.544 19.392 292.528 21.056C292.528 21.056 292.528 20.928 292.528 20.8C292.656 19.392 286 15.68 285.36 16.704C283.824 19.136 282.544 21.824 281.52 24.512C281.392 24.512 281.136 24.512 281.008 24.64C276.272 26.304 271.536 28.352 266.8 30.528C264.752 31.552 262.704 32.704 260.656 33.984C258.736 35.264 256.304 36.288 255.792 38.72C255.28 40.384 261.68 43.2 262.96 43.2C267.696 42.944 272.176 40.64 276.528 38.848C276.528 39.104 276.4 39.36 276.272 39.616C273.968 47.552 271.92 55.36 270 63.424C269.872 63.936 269.744 64.448 269.744 64.96C268.592 65.344 267.568 65.728 266.544 66.112C264.752 66.88 262.96 67.648 261.168 68.416C259.504 69.184 257.2 69.952 256.048 71.232C255.152 72.384 262.96 76.352 264.112 76.224C265.136 76.096 266.16 75.968 267.184 75.712C266.288 79.552 265.52 83.52 264.88 87.488C264.112 91.712 263.344 95.808 262.832 100.032C262.32 104.384 261.424 109.632 263.984 113.472C264.624 114.368 266.8 115.904 268.08 115.776C270.384 115.52 270.896 114.24 271.664 112.064C272.304 110.144 272.944 108.224 273.584 106.304C274.608 102.208 275.376 98.24 276.4 94.144C278.192 86.464 279.856 78.784 281.648 71.104C284.208 70.336 286.64 69.696 289.2 69.056C293.04 68.16 297.008 67.264 300.976 66.496C302.768 66.112 304.688 65.856 306.608 65.344C307.888 65.088 310.576 64.832 310.832 63.296C311.088 61.632 305.968 59.584 304.944 59.328C298.288 57.792 290.992 59.072 284.208 60.736C285.36 55.872 286.512 51.008 287.792 46.272C288.816 41.92 289.84 37.696 290.736 33.344C298.032 30.784 305.328 28.608 312.88 26.944C320.816 25.152 329.008 23.872 337.2 23.104C338.864 22.976 340.528 22.848 342.192 22.976C342.704 22.976 343.344 23.104 343.856 23.232C343.984 23.36 343.984 23.36 344.112 23.488C346.544 26.432 347.824 30.4 346.928 34.24C346.672 35.136 351.664 37.952 352.176 37.184C358.32 28.736 347.312 21.44 340.656 18.496Z"
              stroke="white"
              stroke-width="1"
              mask="url(#path-1-outside-1_4_8)"
            />
            <path
              class="path2"
              d="M366.935 30.4C366.679 30.272 365.527 29.632 364.247 28.992C363.351 28.48 362.583 27.968 361.687 27.584C361.047 27.328 360.023 26.816 359.383 26.944C357.335 27.84 355.927 29.888 354.519 31.552C353.111 33.216 351.319 35.008 351.959 37.312C352.215 38.208 353.879 38.976 354.519 39.36C355.159 39.744 356.055 40.256 356.823 40.512C355.031 48.192 353.367 56 351.703 63.808C350.423 69.696 349.399 75.712 348.375 81.6C347.863 84.8 347.479 87.872 347.095 91.072C346.711 94.784 346.199 97.856 348.119 101.312C348.631 102.336 351.575 104.384 352.727 104C355.799 103.104 356.439 100.416 357.463 97.6C358.487 94.784 359.383 91.968 360.151 89.024C361.815 83.264 363.479 77.376 364.759 71.36C367.575 59.456 370.135 47.424 372.695 35.392C373.079 33.472 368.215 31.04 366.935 30.4Z"
              stroke="white"
              stroke-width="1"
              mask="url(#path-1-outside-1_4_8)"
            />
            <path
              class="path2"
              d="M432.849 15.04C436.689 14.784 440.529 14.656 444.369 14.656C446.417 14.656 448.465 14.656 450.513 14.656C452.177 14.656 453.329 14.912 454.481 13.632C455.249 12.608 448.593 9.28 447.825 9.02399C439.889 6.71999 431.441 7.616 423.377 7.99999C418.257 8.256 413.265 8.63999 408.401 9.15199C407.889 7.488 400.849 3.26399 399.313 4.28799C397.137 5.952 395.857 8.384 394.961 11.072C382.033 13.12 368.977 16.064 357.073 21.44C356.561 21.696 360.401 24.512 361.425 24.384C371.921 22.592 382.161 20.672 392.657 19.136C391.249 23.744 389.969 28.352 388.689 32.96C386.129 42.688 383.825 52.416 381.905 62.272C379.985 72.128 378.449 82.112 377.169 92.096C376.529 97.344 375.889 102.464 375.633 107.712C375.249 112.832 374.609 119.104 376.657 123.84C377.041 124.736 380.881 127.424 381.777 126.656C383.697 125.12 384.081 121.92 384.721 119.616C385.361 117.312 385.873 115.136 386.257 112.832C387.153 107.84 388.049 102.72 388.945 97.728C390.737 88 392.657 78.272 394.833 68.544C397.009 58.816 399.313 49.088 401.873 39.488C403.153 34.496 404.561 29.504 405.969 24.512C406.609 21.952 407.505 19.52 408.017 16.96C408.657 16.832 409.297 16.832 409.809 16.704C417.489 15.936 425.169 15.296 432.849 15.04Z"
              stroke="white"
              stroke-width="1"
              mask="url(#path-1-outside-1_4_8)"
            />
            <path
              class="path2"
              d="M431.309 79.68C435.533 72.384 439.757 65.088 444.365 57.92C447.821 52.544 451.533 47.168 455.245 41.92C453.325 49.216 451.533 56.512 449.869 63.808C447.949 71.616 446.285 79.424 444.621 87.36C442.957 95.296 440.653 103.616 442.061 111.808C442.189 113.088 448.717 117.056 449.613 115.904C452.301 112.576 452.941 109.12 454.093 105.024C454.989 101.312 455.757 97.472 456.653 93.632C458.445 85.824 460.237 78.016 461.901 70.208C463.693 62.528 465.485 54.976 467.277 47.296C468.173 43.456 468.813 39.488 469.581 35.648C470.349 31.808 471.885 26.432 470.221 22.72C469.709 21.568 467.789 20.672 466.637 20.032C466.509 20.032 464.973 19.264 464.333 19.264C464.333 19.264 464.333 19.264 464.205 19.264C462.285 20.032 461.773 21.696 461.005 23.616C460.749 24.256 460.493 24.896 460.237 25.536C459.213 26.688 458.317 27.712 457.293 28.864C454.989 31.68 452.813 34.496 450.637 37.312C446.413 42.944 442.573 48.832 438.861 54.72C438.477 55.488 437.965 56.256 437.581 56.896C440.653 45.376 443.981 33.344 445.005 21.312C445.133 19.776 441.549 17.984 440.525 17.344C440.141 17.216 434.765 14.656 434.765 15.424C434.509 16.064 434.253 16.704 433.997 17.344C433.357 17.984 432.589 18.368 431.821 19.008C430.413 20.16 429.133 21.44 427.853 22.72C426.701 24 425.677 25.28 424.653 26.688C423.501 28.352 423.117 30.016 422.349 31.808C422.093 32.192 424.525 33.6 424.909 33.216C426.061 31.936 427.725 30.912 429.133 29.76C429.517 29.504 429.773 29.12 430.157 28.864C429.773 30.4 429.261 31.936 428.877 33.472C427.213 39.616 425.421 45.76 423.629 51.904C422.093 57.92 420.301 63.936 418.637 69.952C417.741 73.152 416.973 76.224 416.333 79.424C415.565 82.752 414.797 86.464 415.949 89.664C416.205 90.688 418.125 92.224 420.173 93.248C420.557 93.76 422.349 94.656 422.477 94.4C422.477 94.272 422.477 94.272 422.605 94.272C423.245 94.4 423.757 94.4 424.141 94.144C426.957 92.736 428.109 89.024 429.133 86.208C429.901 84.032 430.541 81.856 431.309 79.68Z"
              stroke="white"
              stroke-width="1"
              mask="url(#path-1-outside-1_4_8)"
            />
            <path
              class="path2"
              d="M469.051 49.728C469.947 51.52 474.555 54.208 476.603 53.952C477.371 53.952 478.139 53.568 478.651 53.056C477.883 55.232 477.115 57.408 476.219 59.584C474.043 65.6 471.867 71.744 469.819 77.888C467.387 79.552 465.083 81.344 462.779 83.392C462.523 83.52 465.723 85.952 467.131 86.208C466.491 88.64 466.235 91.2 467.899 93.376C469.691 95.424 472.379 96.96 474.811 98.24C476.731 99.264 478.779 100.288 480.955 100.288C484.795 100.16 489.147 97.856 492.731 96.448C497.083 94.912 501.435 93.376 505.787 91.84C510.395 90.176 514.875 88.384 519.483 86.464C521.787 85.568 524.091 84.544 526.523 83.392C528.443 82.624 530.363 81.856 531.515 79.936C532.027 79.168 527.547 77.12 526.907 77.12C521.275 77.12 515.899 79.04 510.523 80.704C506.043 82.112 501.435 83.52 496.955 85.056C492.603 86.592 488.123 88.128 483.771 89.664C482.107 90.176 480.571 90.816 478.907 91.328C479.547 89.408 480.187 87.616 480.827 85.824C481.467 83.52 482.235 81.344 483.003 79.04C486.459 77.632 489.915 76.224 493.371 75.072C497.467 73.536 501.563 72.384 505.787 71.36C509.371 70.464 513.851 70.08 516.795 67.904C516.795 67.776 516.795 67.776 516.795 67.648C516.795 67.52 516.795 67.264 516.795 67.008C516.667 65.984 513.851 64.96 513.083 64.704C507.835 63.296 502.459 64.448 497.339 65.856C493.499 66.752 489.787 68.032 486.075 69.44C487.611 64.704 489.019 59.84 490.427 55.104C491.067 52.672 491.835 50.24 492.475 47.808C492.731 46.912 492.987 46.016 493.115 45.12C495.931 44.352 498.619 43.712 501.307 43.072C506.427 41.792 511.675 40.768 516.923 40C519.611 39.616 522.171 39.232 524.859 38.848C526.395 38.592 529.723 38.848 530.107 36.928C530.363 35.648 526.267 33.856 525.371 33.6C519.483 31.936 513.339 32.448 507.323 33.344C501.691 33.984 496.187 35.136 490.683 36.544C490.427 36.672 490.043 36.672 489.787 36.8C488.891 36.288 487.995 36.032 487.355 36.16C486.075 36.544 485.307 37.184 484.667 38.208C481.979 38.976 479.291 39.872 476.731 41.024C473.787 42.432 467.259 45.632 469.051 49.728Z"
              stroke="white"
              stroke-width="1"
              mask="url(#path-1-outside-1_4_8)"
            />
            <path
              class="path2"
              d="M498.209 100.928C510.241 104.256 523.681 101.952 535.329 98.368C546.721 94.912 557.601 89.28 566.689 81.6C571.425 77.632 575.521 73.152 578.977 68.16C582.689 62.912 585.249 56.512 580.385 51.136C575.777 46.016 567.585 42.048 560.673 42.048C556.961 41.92 553.377 42.944 549.793 43.84C548.769 44.096 547.745 44.352 546.721 44.48C546.977 43.84 547.233 43.2 547.873 42.432C548.897 41.024 550.049 39.744 551.201 38.592C553.889 36.032 556.705 33.856 559.905 32.064C563.489 29.888 567.585 28.224 571.809 27.072C571.297 30.784 571.425 33.984 573.601 37.44C573.985 37.952 575.009 38.72 575.649 38.592C579.745 37.824 580.513 34.112 582.177 30.912C583.713 27.584 585.505 24.256 587.169 20.928C588.065 19.008 576.545 12.736 575.777 14.272C574.497 16.96 573.473 19.52 572.833 22.208C566.305 21.184 559.777 21.568 553.633 24C547.745 26.304 542.369 29.888 538.145 34.752C536.353 36.928 534.561 39.488 535.969 42.304C537.505 45.632 542.241 47.936 545.313 49.472C548.129 50.752 550.945 51.52 554.017 51.392C557.601 51.264 561.185 49.984 564.769 49.216C566.433 48.96 568.097 48.704 569.761 48.576C570.401 48.576 571.169 48.704 571.809 48.704C572.065 49.088 572.193 49.6 572.321 49.984C572.833 51.904 572.577 53.824 572.065 55.744C570.145 61.632 565.409 67.008 561.057 71.232C552.353 79.808 541.345 85.696 529.697 89.664C523.297 91.84 516.513 93.248 509.729 94.144C506.401 94.528 503.073 94.912 499.745 95.04C497.185 95.168 493.729 94.656 491.553 96.32C490.785 96.832 497.569 100.672 498.209 100.928ZM571.425 48.064C571.553 48.064 571.553 48.192 571.553 48.32C570.401 47.424 570.529 46.528 571.425 48.064ZM623.905 36.672C623.905 37.952 629.921 41.408 630.561 40.384C632.609 37.184 634.273 33.856 635.553 30.144C636.577 27.328 638.369 23.872 637.985 20.928C637.601 17.6 633.761 15.424 631.201 14.016C628.129 12.352 624.801 10.816 621.217 11.456C615.585 12.608 609.697 16.448 605.089 19.776C602.529 21.568 600.097 23.744 598.177 26.304C597.921 26.816 597.537 27.2 597.281 27.712C595.489 29.504 593.697 31.424 591.905 33.216C589.729 35.648 587.425 38.336 587.553 41.664C587.681 45.12 590.753 47.424 593.313 49.216C597.281 52.032 601.889 54.464 606.753 55.36C610.209 56 613.537 55.744 616.993 55.36C617.249 55.36 617.633 55.36 617.889 55.36C618.017 59.2 615.073 62.784 612.385 65.344C609.313 68.288 605.857 70.976 602.529 73.664C595.745 78.784 588.705 83.648 581.409 87.872C566.561 96.448 550.561 103.104 533.921 107.456C524.705 110.016 515.361 111.68 505.889 112.832C501.153 113.472 496.545 113.856 491.809 114.112C487.713 114.368 483.105 113.856 479.265 115.52C477.985 116.032 485.153 120 486.049 120.256C495.137 122.304 504.609 121.92 513.825 121.152C522.401 120.384 530.721 118.976 539.041 117.056C555.425 113.344 571.297 107.328 586.273 99.52C593.825 95.552 601.249 90.944 608.289 85.952C614.945 81.216 622.497 75.968 627.617 69.568C630.049 66.624 631.841 62.656 629.921 58.944C627.745 54.592 622.369 51.776 618.145 49.728C614.305 47.936 610.337 47.04 606.113 47.296C604.321 47.296 602.657 47.424 600.865 47.552C600.993 46.656 601.377 45.888 601.761 45.12C603.681 41.152 607.393 37.824 610.337 34.752C613.409 31.424 616.609 28.352 619.937 25.536C622.113 23.744 624.417 22.208 626.593 20.544C626.081 22.592 625.569 24.512 625.057 26.56C624.417 29.888 624.161 33.216 623.905 36.672Z"
              stroke="white"
              stroke-width="1"
              mask="url(#path-1-outside-1_4_8)"
            />
          </svg>
          <h4>
            Please fill out this form to download programs for free. In the
            future, we'll send you a few emails a month with promotions, deals,
            and exclusive programs. You can unsubscribe at anytime by clicking
            the link at the bottom of every email. We'll never share your
            information, promise.
          </h4>
          <form ref={formRef} onSubmit={handleSubmit}>
            <h1>How did you find out about BuzyFitness?</h1>
            <input
              ref={referralRef}
              type="text"
              placeholder="Instagram, TikTok, Friends, etc."
              name="user_referral"
            />
            <h1>Leave your Instagram or TikTok</h1>
            <input
              type="text"
              ref={socialRef}
              placeholder="@jondoe123"
              name="user_social"
            />
            <h1>Email address</h1>
            <input
              ref={emailRef}
              type="text"
              placeholder="jondoe123@gmail.com"
              name="user_email"
            />{" "}
            <div className="downloadBtn">
              <Button action="DOWNLOAD NOW"/>{" "}
            </div>
            {!formIsValid && (
              <h1 style={{ color: "rgb(255, 77, 77)" }}>
               *Please enter a valid input*
              </h1>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
