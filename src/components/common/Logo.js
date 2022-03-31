import React from 'react';
import clsx from 'clsx';

const Logo = ({ className, color, ...props }) => {
    const colors = {
        beige: 'text-beige',
        green: 'text-green',
        yellow: 'text-yellow',
        default: 'text-green'
    };
    const text = colors[color] || colors.default;
    return (
        <svg
            {...props}
            className={clsx(className, text, 'transition-all duration-500')}
            viewBox="0 0 280 272"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="currentColor"
                d="M121.071 0.724213C100.795 3.13242 77.2568 15.9503 58.1465 35.2159C32.8215 60.6186 7.65188 107.851 1.74789 141.099C-0.582631 153.917 -0.582631 171.085 1.74789 179.708C7.34114 200.916 22.8003 218.473 55.583 241.234C60.1663 244.419 65.0604 248.226 66.4587 249.702C70.7313 254.207 89.2202 263.84 102.038 268.19L113.302 271.997H124.566C137.54 272.075 146.706 270.676 160.301 266.559C177.469 261.432 198.522 251.954 211.184 243.642C218.642 238.826 234.412 224.843 239.228 218.861C251.114 204.101 267.738 170.153 276.439 142.808C277.992 137.914 279.391 131.933 279.624 129.602C279.935 125.485 279.857 125.64 277.992 132.321C268.826 164.638 250.57 203.324 237.131 219.016C230.838 226.319 215.69 239.214 207.921 243.875C197.667 250.09 178.635 258.946 167.293 262.83C150.824 268.423 139.792 270.443 125.343 270.521H113.302L102.426 266.792C89.8416 262.52 73.1395 253.819 67.857 248.847C65.9149 246.983 60.0886 242.477 54.8838 238.826C29.1704 220.648 14.1773 205.577 7.26346 190.895C-0.893367 173.338 -0.737999 149.567 7.80725 122.999C13.0898 106.685 22.3342 87.4973 33.9091 68.8531C55.4276 34.2837 82.5393 11.7553 111.904 3.98694C118.196 2.35556 121.304 1.96716 130.004 1.96716C141.968 1.88947 142.356 1.96716 162.01 10.357C168.536 13.1537 174.129 15.0958 174.44 14.785C174.828 14.3966 168.069 11.2892 159.524 7.71579C140.569 -0.0526428 135.442 -0.984833 121.071 0.724213Z"
            />
            <path
                fill="currentColor"
                d="M193.394 22.7088C193.627 23.3303 194.249 24.0295 194.793 24.1848C195.259 24.4179 197.978 26.2823 200.697 28.3798C203.493 30.4772 210.019 34.4391 215.301 37.0804C222.681 40.8869 225.478 42.7513 227.731 45.4703C229.284 47.4124 232.159 49.7429 234.101 50.7528C238.14 52.8502 239.694 54.4039 244.122 61.0071C245.909 63.6483 249.094 67.921 251.191 70.4845C253.367 73.1258 256.396 77.3984 257.95 80.0397C259.504 82.7586 263.077 87.0312 265.951 89.7502C268.748 92.3914 272.399 96.3533 273.953 98.6838C276.749 102.723 276.827 102.956 277.293 112.356C277.682 119.27 278.148 122.067 279.002 122.766C280.012 123.62 280.09 123.387 279.624 121.368C279.313 119.969 279.002 114.997 278.847 110.181C278.769 105.442 278.303 101.247 277.915 101.014C277.526 100.704 275.74 98.5285 273.953 96.1203C272.166 93.7121 268.748 90.0609 266.34 88.0411C263.776 85.7883 261.135 82.6032 259.97 80.3504C258.882 78.2529 255.852 73.8249 253.133 70.4845C250.415 67.2218 246.841 62.4054 245.054 59.8418C241.325 54.2486 237.907 50.7528 234.567 49.0437C233.246 48.3446 230.45 46.014 228.275 43.8389C225.478 40.8869 222.293 38.7894 216.622 36.0705C212.349 33.973 206.057 30.3219 202.639 27.836C194.948 22.3204 192.773 21.1552 193.394 22.7088Z"
            />
            <path
                fill="currentColor"
                d="M120.527 25.2727C123.168 25.5057 123.789 25.8941 123.789 27.1371C123.789 29.623 121.77 33.6626 118.429 37.9352C116.642 40.188 115.244 42.4408 115.244 42.9846C115.244 44.2276 109.496 55.6471 107.631 58.0553C106.155 59.8421 106.155 59.8421 101.96 58.6768C97.0661 57.2008 95.9008 57.5892 99.9404 59.2983C101.572 59.9198 102.815 60.7743 102.815 61.1627C102.815 62.4057 95.5124 67.4551 93.648 67.4551C91.5505 67.4551 81.84 60.6966 80.131 57.9C78.0335 54.7149 77.9558 52.7728 79.8979 50.52C80.8301 49.3547 82.9276 45.7813 84.559 42.5962C86.1127 39.4112 88.6762 35.1385 90.0745 33.0411C91.5505 31.0213 92.4827 29.3899 92.172 29.3899C90.3076 29.3899 86.5788 31.4874 86.268 32.6526C86.035 33.4295 86.1903 33.8956 86.5788 33.5849C87.6663 32.9634 87.4333 33.6626 85.3358 37.6244C84.2482 39.6442 83.3937 41.7417 83.3937 42.3632C83.3937 42.9846 83.083 43.2954 82.6946 43.0623C82.3061 42.8293 81.5293 43.2177 80.9855 43.9168C80.2087 44.8491 80.2087 45.0044 80.9078 44.616C81.3739 44.3053 81.84 44.3829 81.84 44.7714C81.84 46.0143 80.8301 46.4804 79.8979 45.7036C79.2765 45.2375 77.7228 46.092 75.0038 48.5002C72.8287 50.4423 70.6535 51.7629 70.1874 51.5299C69.7213 51.2191 69.4106 51.2968 69.4883 51.6853C69.9544 53.6273 66.5363 58.3661 65.2933 57.5892C64.9049 57.3562 65.371 56.5017 66.3809 55.6471C68.5561 53.8604 66.9247 54.5596 63.7397 56.8124C62.186 57.9 61.7976 58.5215 62.419 58.9099C63.1182 59.2983 62.8851 59.6867 61.7199 60.0751C60.8653 60.3082 60.0885 60.9297 60.0885 61.3181C60.0885 62.4833 61.3314 62.0949 62.8074 60.4635C63.5843 59.609 64.4388 59.1429 64.7495 59.2983C65.6041 59.8421 76.9459 49.8985 77.4897 48.1895C77.8781 46.9465 80.2864 46.0143 80.2864 47.1019C80.2864 48.1895 71.3527 57.2785 68.9445 58.5215C67.3908 59.376 65.5264 60.9297 64.8272 61.9395C63.5843 63.804 63.662 63.804 65.9148 63.2602C67.2354 62.9494 70.0321 60.9297 72.2849 58.7545L76.2468 54.7926L77.412 57.0455C78.7327 59.4537 81.84 62.561 87.1226 66.6783C89.4531 68.3873 91.3952 69.2419 93.3373 69.3195L96.1339 69.3972L99.4743 77.9425C101.261 82.6035 102.737 86.7208 102.815 87.0315C102.892 88.5075 100.407 87.2646 94.6579 82.9142C91.2398 80.3507 86.7341 77.321 84.7143 76.3111C82.6169 75.2235 78.7327 72.8153 75.936 70.9509C73.1394 69.0088 70.3428 67.4551 69.6436 67.4551C68.0123 67.4551 59.3117 62.7164 59.3117 61.8619C59.3117 61.4734 59.7001 60.4635 60.0885 59.609C60.8653 58.2884 60.7877 58.2107 59.0786 58.9875C56.6704 60.0751 53.2523 58.5991 54.5729 57.0455C55.039 56.5017 55.1167 55.8025 54.806 55.4918C54.4952 55.181 54.7283 55.0257 55.2721 55.181C55.7382 55.2587 56.6704 54.5596 57.2142 53.472C57.8357 52.3844 58.6902 51.6076 59.1563 51.6853C59.7001 51.8406 59.8554 51.2968 59.6224 50.52C59.3117 49.5878 59.3893 49.4324 59.9331 50.2093C60.4769 50.9861 61.4091 50.5977 64.2058 48.5002C66.1479 47.0242 69.2552 45.0044 71.1196 44.0722C75.936 41.5863 80.2864 38.6343 80.2864 37.7798C80.2864 37.3137 79.8202 37.1583 79.3541 37.3914C75.703 38.8674 75.8584 38.479 79.6649 36.4592C83.7821 34.284 85.8796 32.4973 84.4036 32.4973C82.8499 32.575 72.9064 38.5566 72.9064 39.4889C72.9064 40.0326 72.4403 40.6541 71.8188 40.8872C71.1973 41.1202 70.9643 40.8872 71.275 40.3434C72.1295 39.0228 71.275 39.3335 70.1097 40.8095C69.3329 41.664 69.3329 41.8971 70.0321 41.5086C70.4982 41.1979 70.9643 41.1202 70.9643 41.3533C70.9643 41.5863 69.799 42.3632 68.4784 43.0623C67.0801 43.7615 64.7495 45.3928 63.4289 46.7135C62.0306 48.0341 60.8653 48.8109 60.8653 48.4225C60.8653 46.8688 49.6788 58.7545 46.5715 63.5709C42.2212 70.3294 42.0658 70.5625 42.5319 70.5625C42.8426 70.5625 44.6294 67.9989 46.7268 64.8915C48.7466 61.8619 50.611 58.9875 50.9218 58.5215C51.2325 58.0553 53.1746 59.6867 55.4275 62.1726C58.7679 65.9791 60.0108 66.756 64.5942 68.1543C68.4784 69.3195 73.2948 71.9608 81.9177 77.6317C88.5209 81.982 95.4347 86.4877 97.2992 87.7307C100.95 90.1389 104.368 90.6827 104.368 88.8959C104.368 88.3521 103.825 86.3324 103.125 84.4679C101.028 78.5639 99.0859 71.3393 99.7074 71.3393C100.018 71.3393 101.572 73.7475 103.048 76.6218C104.601 79.4961 106.932 83.3027 108.33 84.934C112.137 89.7504 116.021 98.0626 116.021 101.481C116.021 103.112 115.322 106.375 114.467 108.861C113.613 111.269 112.914 114.842 112.914 116.707C112.914 119.503 112.448 120.591 110.505 122.611C109.185 123.931 106.466 125.874 104.446 126.883C100.484 128.903 94.2695 133.953 94.2695 135.118C94.2695 135.584 95.4347 135.04 96.8331 134.03C98.1537 132.943 102.349 130.146 106.077 127.738L112.836 123.465L114.157 127.505C114.856 129.68 115.633 133.487 115.71 135.817C115.866 138.614 116.409 140.4 117.264 141.022C118.352 141.799 118.196 142.42 115.71 146.46C114.157 148.946 112.914 151.665 112.914 152.519C112.991 153.917 113.069 153.917 113.924 152.83C114.467 152.208 115.866 150.422 117.031 149.023L119.284 146.46L126.819 150.189C131.014 152.208 135.287 154.539 136.297 155.316L138.161 156.714L133.112 159.045C130.237 160.443 126.819 161.453 125.11 161.453C121.77 161.453 103.359 155.238 98.5421 152.519C96.8331 151.587 92.7935 149.256 89.6084 147.392C81.84 142.964 76.9459 140.478 75.936 140.478C75.3923 140.478 75.1592 138.536 75.3923 134.419C75.8584 126.34 75.8584 126.34 78.7327 127.816C84.9474 130.845 90.696 130.068 96.9884 125.33C99.552 123.388 103.436 120.979 105.689 119.892C109.496 118.105 111.515 116.396 109.962 116.396C108.641 116.396 100.873 120.513 96.2893 123.543C90.696 127.427 87.1226 127.893 80.6748 125.874L76.0137 124.32L75.8584 114.92C75.703 106.375 75.936 105.054 77.6451 101.403C80.9855 94.2561 80.131 90.605 73.6055 83.7688C68.09 78.0202 65.0603 77.1656 52.3978 77.7871C42.6873 78.3309 36.2395 79.8069 34.2197 82.0597C33.5206 82.8366 32.0446 85.4001 30.957 87.8083L29.0149 92.1587L31.7338 105.21C33.2098 112.434 35.3073 122.378 36.4725 127.272C37.5601 132.166 39.1138 139.158 39.8906 142.809C42.4542 154.461 44.3963 159.588 46.9599 161.764C48.2805 162.851 49.6788 163.783 50.0673 163.783C50.4557 163.783 50.7664 164.172 50.7664 164.638C50.7664 165.259 48.6689 165.415 43.6195 165.104C38.0262 164.793 35.385 164.249 31.9669 162.696C29.5587 161.531 27.3058 160.21 26.9174 159.666C26.529 159.122 25.2084 153.995 23.9654 148.247C22.0233 139.08 21.7126 136.206 21.7126 124.941C21.7903 111.657 21.3242 111.347 19.6151 123.465C18.5275 131.001 19.2267 141.488 21.5572 151.432C22.1787 154.151 23.1109 158.501 23.577 161.064C24.1208 163.628 24.7423 165.881 25.053 166.114C25.3637 166.347 26.9174 170.309 28.5488 175.048C30.1801 179.709 32.7437 185.846 34.142 188.642C35.618 191.439 37.9485 196.255 39.4245 199.285C43.4641 207.753 46.8045 212.258 55.5828 221.27C64.6719 230.592 68.7114 233.932 75.0038 237.428C80.8301 240.613 81.84 240.613 76.7129 237.35C70.2651 233.311 63.1182 227.251 57.9133 221.425C50.1449 212.647 36.7833 191.905 36.7833 188.642C36.7833 188.176 35.2296 184.137 33.2875 179.709C31.4231 175.203 29.6364 170.309 29.3256 168.833L28.8595 166.114L31.6561 167.279C35.1519 168.755 39.7353 168.91 50.0673 167.745C56.9035 167.046 59.234 167.046 63.8173 168.056C66.9247 168.677 73.5278 169.765 78.4996 170.386C89.4531 171.785 93.415 172.562 105.145 175.436C110.039 176.679 118.429 178.233 123.789 179.009C129.15 179.709 133.888 180.718 134.432 181.185C135.131 181.806 135.131 183.36 134.51 187.71C133.655 192.993 133.733 193.459 135.131 194.935C137.306 197.11 149.27 201.072 151.989 200.528C153.232 200.295 154.941 200.45 155.873 200.916C161.389 203.558 165.04 204.334 169.545 203.868C172.73 203.48 175.061 203.713 177.469 204.49C179.334 205.189 182.13 205.733 183.684 205.733C186.714 205.733 187.879 204.723 193.317 197.188C194.637 195.401 196.812 192.682 198.211 191.206C200.93 188.098 201.396 185.224 199.609 181.728C198.988 180.563 198.288 177.378 198.055 174.581C197.434 167.978 197.123 167.046 194.016 163.24C192.151 160.987 191.064 158.501 190.287 154.927C189.122 149.101 187.879 147.004 183.528 142.964C177.003 136.982 173.352 136.128 168.691 139.313C167.137 140.4 165.273 141.255 164.651 141.255C163.952 141.255 163.408 141.721 163.408 142.343C163.408 143.586 161.777 144.362 159.058 144.362C157.893 144.362 157.194 144.828 157.194 145.528C157.194 146.227 156.494 146.693 155.329 146.693C154.242 146.693 153.154 147.081 152.843 147.625C152.533 148.091 152.61 148.247 153.076 148.013C153.542 147.703 154.319 147.936 154.785 148.557C155.562 149.412 155.018 149.723 151.989 149.956C149.969 150.189 148.182 150.189 148.027 150.111C147.328 149.645 149.658 146.615 150.435 146.926C150.979 147.159 152.299 146.46 153.387 145.372C154.708 144.207 156.65 143.352 158.747 143.197C162.476 142.809 163.952 142.032 161 142.032C159.524 142.032 159.369 141.876 160.301 141.255C162.631 139.701 158.825 140.4 153.931 142.42C143.521 146.615 139.404 144.673 129.227 130.379C126.353 126.34 122.313 120.902 120.371 118.338C117.031 114.066 116.72 113.444 117.342 110.958C117.652 109.482 117.963 105.986 117.963 103.19C117.963 99.0725 117.497 97.2081 115.477 93.0909C114.157 90.2942 111.826 86.6431 110.35 84.934C108.952 83.225 106.466 79.5738 104.912 76.7772C103.281 73.9806 101.261 70.7955 100.329 69.5526L98.6198 67.4551L101.649 64.3477C103.281 62.7164 105.456 61.2404 106.544 61.085C108.253 60.852 109.34 59.2983 113.69 50.753C116.487 45.1598 120.138 38.6343 121.692 36.2261C123.323 33.7402 125.032 30.3998 125.576 28.8461L126.508 25.8941L132.335 25.428C136.763 25.1173 135.675 25.0396 127.674 25.0396C121.925 25.0396 118.662 25.1173 120.527 25.2727ZM65.0603 57.9777C65.2933 58.3661 64.9826 58.6768 64.3611 58.6768C63.7397 58.6768 63.4289 58.3661 63.662 57.9777C63.895 57.6669 64.2058 57.3562 64.3611 57.3562C64.5165 57.3562 64.8272 57.6669 65.0603 57.9777ZM56.282 83.9241C57.5249 83.1473 58.1464 83.1473 58.9232 83.7688C59.5447 84.3126 61.0207 84.4679 62.2637 84.1572C65.371 83.5357 68.4784 84.8564 68.7891 87.0315C68.9445 88.3521 69.4883 88.7406 70.8089 88.5852C72.2849 88.4298 72.5179 88.7406 72.1295 89.9058C71.8188 90.838 72.2072 91.7702 73.0617 92.4694C74.6931 93.6347 74.7708 94.9553 73.2948 97.985C72.4403 99.7717 72.4403 101.015 73.2171 105.054C74.3047 110.57 73.8386 135.118 72.5956 139.546C72.2072 140.944 70.4205 143.896 68.7114 146.071C64.1281 151.742 64.8272 152.519 69.7213 147.237C73.4502 143.119 73.9939 142.731 76.0914 143.275C77.3344 143.586 84.4813 147.081 91.939 151.043C106.155 158.579 117.186 162.773 124.722 163.55C129.15 164.016 129.305 163.939 137.617 158.812C150.59 150.965 153.931 152.053 155.64 164.56L156.184 168.833L156.339 163.317C156.417 158.579 156.106 157.336 154.475 154.927C152.222 151.665 152.144 151.276 153.62 151.82C154.164 152.053 155.174 151.665 155.873 151.043C156.572 150.344 157.427 149.8 157.815 149.8C158.203 149.8 158.747 149.101 158.98 148.247C159.213 147.392 159.835 146.693 160.456 146.693C161.233 146.693 161.155 146.926 160.301 147.547C159.446 148.169 159.99 148.247 162.631 147.936C165.972 147.625 166.05 147.625 164.185 148.635C163.098 149.256 161.544 149.8 160.689 149.8C158.98 149.956 170.011 152.908 172.187 152.908C173.818 152.908 173.973 155.083 172.42 155.704C171.798 155.937 168.691 156.559 165.583 157.103L159.913 158.112L164.418 160.365C170.478 163.395 170.4 164.793 164.03 166.036L160.689 166.735L163.641 166.813C167.215 166.891 167.137 168.056 163.408 170.542C161.155 172.173 161 172.329 162.554 172.329C165.35 172.329 164.03 174.038 159.446 176.368C155.018 178.621 152.533 179.087 152.533 177.766C152.533 177.223 152.066 177.223 151.212 177.611C150.357 178.077 142.822 177.922 131.946 177.378C116.565 176.524 112.836 176.057 105.145 174.038C96.6 171.785 93.7257 171.163 75.6253 167.745C65.9148 165.881 54.7283 162.773 50.3003 160.598L47.1153 159.122L44.7071 149.567C40.1237 131.544 32.7437 95.8875 33.0544 93.6347C33.2098 92.5471 33.8313 91.9256 34.8412 91.9256C35.8511 91.9256 36.4725 91.3041 36.6279 90.1389C36.7833 89.129 37.7155 88.0414 38.8031 87.653C39.813 87.2646 40.6675 86.5654 40.6675 86.0993C40.6675 85.7109 41.522 85.3225 42.5319 85.3225C43.6195 85.3225 44.7071 84.934 44.9401 84.4679C45.2508 84.0795 46.4161 83.8465 47.5037 84.0795C48.6689 84.3126 50.0673 84.2349 50.6887 83.8465C51.3879 83.3804 52.3201 83.458 53.2523 84.0018C54.3399 84.701 55.039 84.701 56.282 83.9241ZM120.294 121.989C122.624 125.097 127.052 130.768 130.004 134.652C136.297 142.809 140.414 146.693 142.9 146.693C144.609 146.693 144.609 146.771 143.521 148.79C142.977 150.033 142.434 151.509 142.434 152.208C142.434 152.908 141.89 153.917 141.268 154.461C140.258 155.238 139.792 155.238 138.627 154.151C137.85 153.451 133.811 151.043 129.538 148.79C122.702 145.139 121.847 144.362 121.614 142.343C121.459 141.1 120.527 139.313 119.439 138.303C118.352 137.293 117.575 135.662 117.575 134.341C117.575 133.176 117.109 130.457 116.487 128.359C115.011 123.388 114.312 116.396 115.244 116.396C115.633 116.396 117.885 118.96 120.294 121.989ZM168.069 146.227C168.069 146.46 167.759 146.848 167.292 147.081C166.904 147.314 166.516 147.159 166.516 146.771C166.516 146.304 166.904 145.916 167.292 145.916C167.759 145.916 168.069 146.071 168.069 146.227ZM182.829 155.549C182.829 155.782 182.519 156.17 182.052 156.403C181.664 156.636 181.276 156.481 181.276 156.093C181.276 155.627 181.664 155.238 182.052 155.238C182.519 155.238 182.829 155.393 182.829 155.549ZM185.937 157.957C185.16 158.889 185.16 159.122 186.17 159.122C186.869 159.122 187.568 158.501 187.723 157.724C187.956 157.025 188.112 157.413 188.189 158.734C188.267 161.686 187.646 162.618 185.16 163.395C184.072 163.706 182.519 164.56 181.664 165.337C179.411 167.279 177.391 167.901 177.935 166.425C178.168 165.881 178.945 165.337 179.722 165.337C180.576 165.337 181.276 164.56 181.586 163.473C182.052 161.686 185.626 156.792 186.48 156.792C186.714 156.792 186.48 157.336 185.937 157.957ZM181.276 160.909C181.276 161.064 180.499 161.841 179.567 162.696L177.78 164.172L179.256 162.385C180.654 160.754 181.276 160.288 181.276 160.909ZM188.5 165.104C187.956 165.259 187.49 166.192 187.413 167.124C187.413 168.056 187.18 168.367 186.947 167.823C186.403 166.425 187.257 164.56 188.423 164.638C189.199 164.638 189.199 164.793 188.5 165.104ZM190.598 166.425C190.598 166.58 189.976 167.201 189.277 167.745C188.034 168.755 187.956 168.677 188.966 167.435C189.976 166.192 190.598 165.803 190.598 166.425ZM173.119 177.689C171.643 178.31 171.72 178.388 173.507 178.699C175.372 179.009 175.372 179.087 172.73 180.175C167.914 182.35 162.709 183.282 161.078 182.428C159.213 181.418 158.747 181.418 158.747 182.428C158.747 182.816 159.446 183.204 160.379 183.204C161.233 183.204 161.777 183.515 161.544 183.904C161.311 184.292 161.855 184.836 162.865 185.146C164.418 185.69 164.34 185.768 161.855 186.312C159.602 186.778 160.146 186.933 164.574 187.011C168.302 187.011 169.623 186.856 168.846 186.312C168.147 185.846 168.069 185.535 168.613 185.535C169.079 185.535 170.011 186.079 170.711 186.7C171.41 187.477 173.507 187.865 176.382 187.943C180.033 188.021 180.499 188.176 178.557 188.642C177.314 188.953 176.692 189.264 177.236 189.341C177.702 189.341 178.168 189.652 178.168 189.963C178.168 190.351 175.682 190.584 172.575 190.584C168.846 190.584 166.904 190.895 166.749 191.517C166.516 192.06 165.816 192.526 165.117 192.526C164.03 192.526 163.952 192.371 164.884 191.827C165.583 191.361 164.107 191.284 161 191.517C158.281 191.827 155.018 192.604 153.698 193.459L151.367 194.857H154.863C156.805 194.857 157.97 194.546 157.427 194.236C156.883 193.925 158.67 193.536 161.389 193.459C164.107 193.381 167.215 192.993 168.302 192.604C169.312 192.216 171.021 192.06 172.031 192.371C173.585 192.837 173.196 192.993 170.4 193.303C166.982 193.692 165.894 194.935 168.535 195.478C169.312 195.712 169.623 195.478 169.312 194.935C168.924 194.313 170.167 194.08 173.196 194.08C177.391 194.08 177.547 194.158 176.148 195.245C174.828 196.333 175.139 196.411 180.499 196.1C183.684 195.945 187.024 195.556 187.879 195.245C189.432 194.702 189.432 194.779 187.956 195.945C187.102 196.644 186.014 197.188 185.626 197.265C185.16 197.343 185.626 197.654 186.714 197.964C188.423 198.508 188.345 198.586 185.781 198.663C184.228 198.741 182.441 199.207 181.897 199.751C180.732 200.994 174.051 202.082 174.75 200.994C174.983 200.606 175.682 200.295 176.382 200.295C177.081 200.295 177.391 200.062 177.158 199.829C176.848 199.518 174.517 199.906 171.876 200.683C166.904 202.004 164.884 201.693 162.01 198.897C161.311 198.275 158.514 197.964 154.164 197.964C147.017 197.964 142.434 197.343 142.434 196.488C142.434 196.178 144.609 196.022 147.328 196.1L152.144 196.333L148.027 195.712C144.919 195.323 143.521 194.702 142.434 193.303C141.346 191.905 141.191 191.206 141.89 190.74C142.434 190.351 141.812 190.274 140.336 190.507C138.472 190.817 137.773 190.662 137.773 189.808C137.773 189.264 138.161 188.487 138.549 188.254C139.015 188.021 139.326 187.399 139.326 186.933C139.326 186.467 138.549 186.7 137.617 187.555L135.83 189.031L137.229 187.322C138.083 186.389 139.171 185.846 139.792 186.079C140.569 186.312 140.725 186.079 140.414 185.302C140.103 184.37 140.802 183.826 143.133 183.127C144.842 182.583 146.085 181.884 145.852 181.573C145.619 181.185 148.338 180.874 151.833 180.874C155.329 180.874 159.99 180.408 162.165 179.786C170.322 177.456 176.692 176.29 173.119 177.689ZM175.294 191.517C174.75 191.672 173.663 191.672 172.963 191.517C172.187 191.284 172.653 191.128 173.896 191.128C175.216 191.128 175.76 191.284 175.294 191.517Z"
            />
            <path
                fill="currentColor"
                d="M183.995 159.977C183.529 160.598 183.684 160.754 184.383 160.288C185.16 159.821 185.315 159.977 184.849 161.142C184.383 162.307 184.461 162.463 185.238 161.608C185.937 160.909 186.015 160.443 185.393 159.821C184.772 159.2 184.383 159.278 183.995 159.977Z"
            />
            <path
                fill="currentColor"
                d="M169.468 179.864C170.012 180.097 170.711 180.019 170.944 179.786C171.255 179.553 170.789 179.32 169.934 179.398C169.08 179.398 168.847 179.631 169.468 179.864Z"
            />
            <path
                fill="currentColor"
                d="M161.699 181.418C162.243 181.651 162.942 181.573 163.175 181.34C163.486 181.107 163.02 180.874 162.165 180.952C161.311 180.952 161.078 181.185 161.699 181.418Z"
            />
            <path
                fill="currentColor"
                d="M152.532 184.758C151.678 185.302 151.678 185.535 152.377 185.535C152.921 185.535 153.154 185.923 152.843 186.467C152.532 187.011 152.61 187.088 153.231 186.778C153.698 186.467 153.931 185.923 153.698 185.535C153.464 185.224 153.775 184.68 154.241 184.525C154.785 184.292 154.94 184.059 154.474 184.059C154.086 184.059 153.154 184.37 152.532 184.758Z"
            />
            <path
                fill="currentColor"
                d="M148.183 186.001C146.862 187.088 146.862 187.166 148.105 186.778C148.882 186.545 149.892 186.312 150.28 186.312C150.669 186.312 150.979 185.923 150.979 185.535C150.979 184.447 149.969 184.603 148.183 186.001Z"
            />
            <path
                fill="currentColor"
                d="M154.863 186.389C154.863 186.778 155.252 186.933 155.64 186.7C156.106 186.467 156.417 186.078 156.417 185.845C156.417 185.69 156.106 185.535 155.64 185.535C155.252 185.535 154.863 185.923 154.863 186.389Z"
            />
            <path
                fill="currentColor"
                d="M144.298 188.565C143.365 189.264 143.055 190.973 143.909 190.973C144.298 190.973 144.841 190.429 145.074 189.73C145.385 188.953 146.084 188.72 147.094 189.031C147.949 189.264 149.269 189.186 149.969 188.72C151.056 188.098 150.668 187.943 148.182 188.021C146.395 188.021 144.686 188.254 144.298 188.565Z"
            />
            <path
                fill="currentColor"
                d="M154.086 190.429C150.28 191.128 150.046 191.284 151.756 191.905C153.232 192.371 154.552 192.138 156.805 191.051C160.301 189.342 160.145 189.264 154.086 190.429Z"
            />
            <path
                fill="currentColor"
                d="M161.699 194.624C162.243 194.857 162.942 194.779 163.175 194.546C163.486 194.313 163.02 194.08 162.165 194.158C161.311 194.158 161.078 194.391 161.699 194.624Z"
            />
            <path
                fill="currentColor"
                d="M171.799 196.178C172.342 196.411 173.041 196.333 173.275 196.1C173.585 195.867 173.119 195.634 172.265 195.711C171.41 195.711 171.177 195.944 171.799 196.178Z"
            />
            <path
                fill="currentColor"
                d="M164.03 199.285C164.496 199.44 165.428 199.44 165.972 199.285C166.438 199.052 166.049 198.897 164.962 198.897C163.874 198.897 163.486 199.052 164.03 199.285Z"
            />
            <path
                fill="currentColor"
                d="M106.544 26.0495C107.01 26.2049 107.942 26.2049 108.486 26.0495C108.952 25.8164 108.563 25.6611 107.476 25.6611C106.388 25.6611 106 25.8164 106.544 26.0495Z"
            />
            <path
                fill="currentColor"
                d="M141.89 26.0495C142.589 26.2049 143.832 26.2049 144.609 26.0495C145.308 25.8164 144.686 25.6611 143.21 25.6611C141.734 25.6611 141.113 25.8164 141.89 26.0495Z"
            />
            <path
                fill="currentColor"
                d="M160.923 26.8264C161.466 27.0595 162.166 26.9818 162.399 26.7488C162.709 26.5157 162.243 26.2827 161.389 26.3603C160.534 26.3603 160.301 26.5934 160.923 26.8264Z"
            />
            <path
                fill="currentColor"
                d="M164.03 27.6027C164.574 27.8357 165.273 27.7581 165.506 27.525C165.817 27.292 165.351 27.0589 164.496 27.1366C163.642 27.1366 163.409 27.3696 164.03 27.6027Z"
            />
            <path
                fill="currentColor"
                d="M167.137 28.3799C167.681 28.613 168.38 28.5353 168.613 28.3022C168.924 28.0692 168.458 27.8361 167.604 27.9138C166.749 27.9138 166.516 28.1469 167.137 28.3799Z"
            />
            <path
                fill="currentColor"
                d="M91.162 34.5947C91.162 35.0608 91.7058 35.8377 92.3272 36.3815C93.7256 37.5467 99.7072 38.7897 99.7072 37.9352C99.7072 37.6244 98.3866 37.0806 96.8329 36.7699C95.2016 36.4592 93.2595 35.6823 92.5603 35.0608C91.7835 34.3617 91.162 34.2063 91.162 34.5947Z"
            />
            <path
                fill="currentColor"
                d="M187.724 34.9829C188.5 35.5267 193.317 38.7117 198.444 42.0521C209.631 49.3544 215.068 54.2485 223.769 65.1243C238.296 83.147 245.754 99.6937 249.716 122.455C250.492 127.349 251.192 134.341 251.192 137.992C251.192 141.721 251.58 145.294 251.968 145.916C252.978 147.547 252.978 137.137 251.968 127.427C248.861 99.1499 236.354 73.8249 215.612 54.0932C208.388 47.257 197.356 39.3332 190.287 35.9151C188.112 34.9052 186.947 34.4391 187.724 34.9829Z"
            />
            <path
                fill="currentColor"
                d="M82.1511 35.915C81.3743 36.5365 80.9082 37.3133 81.2189 37.6241C81.8404 38.1679 78.1116 43.2173 74.4604 46.7131L72.1299 48.9659L74.5381 47.3346C75.8587 46.4801 78.2669 44.3049 79.976 42.4405C81.6073 40.5761 83.161 39.1777 83.3941 39.2554C84.4816 39.5662 84.2486 38.7116 83.0833 38.2455C81.9181 37.7794 81.9181 37.7018 83.161 36.7695C83.9379 36.1481 84.3263 35.5266 84.0932 35.2935C83.8602 35.0605 83.0057 35.3712 82.1511 35.915Z"
            />
            <path
                fill="currentColor"
                d="M73.9942 44.1499C70.3431 47.568 70.1877 47.8788 72.5959 46.4805C75.5479 44.7714 79.1991 41.2756 78.5776 40.6542C78.4222 40.4211 76.3248 42.0525 73.9942 44.1499Z"
            />
            <path
                fill="currentColor"
                d="M69.0221 45.8587C68.1676 46.3248 65.8371 48.1115 63.8173 49.7429C61.8752 51.3743 59.7777 52.6172 59.3116 52.5395C58.7678 52.3842 58.2241 52.9279 58.1464 53.6271C57.991 54.4039 57.2918 55.6469 56.515 56.346C55.1944 57.6667 55.1944 57.7444 56.515 57.9774C57.991 58.2881 60.2438 56.7345 59.7001 55.8023C59.467 55.4915 59.9331 54.7147 60.6323 54.1709C61.7198 53.2387 61.8752 53.2387 61.2537 54.2486C60.943 54.87 61.5645 54.5593 62.652 53.5494C63.8173 52.4618 64.5942 51.4519 64.3611 51.2966C63.895 50.7528 65.5264 48.8107 66.4586 48.8107C66.847 48.8107 66.9247 49.2768 66.5363 49.7429C65.1379 51.9957 65.8371 52.4618 68.4007 50.9858C70.2651 49.8983 70.8089 49.1991 70.1097 48.733C69.5659 48.4223 68.6337 48.4223 67.9346 48.6553C67.2354 48.8884 67.7792 48.1892 69.0221 47.024C71.508 44.8488 71.508 44.4604 69.0221 45.8587ZM69.4106 49.1991C69.4106 49.3545 68.6337 49.8983 67.7015 50.3644C65.9925 51.2189 65.9925 51.1412 67.3908 50.0536C69.0221 48.733 69.4106 48.5776 69.4106 49.1991ZM63.9727 51.4519C63.9727 51.6073 63.3512 52.2288 62.652 52.7726C61.4091 53.7825 61.3314 53.7048 62.3413 52.4618C63.3512 51.2189 63.9727 50.8305 63.9727 51.4519Z"
            />
            <path
                fill="currentColor"
                d="M61.9533 55.9575L60.4773 57.7443L62.264 56.2683C63.8954 54.87 64.3615 54.2485 63.74 54.2485C63.5847 54.2485 62.8078 55.0253 61.9533 55.9575Z"
            />
            <path
                fill="currentColor"
                d="M71.2754 55.4137C70.4986 56.0352 70.1878 56.579 70.6539 56.579C71.12 56.579 71.9746 56.0352 72.5184 55.4137C73.7613 53.9377 73.2175 53.9377 71.2754 55.4137Z"
            />
            <path
                fill="currentColor"
                d="M62.4189 62.4055C61.8752 63.1047 61.7975 63.5708 62.2636 63.5708C62.652 63.5708 63.1958 63.027 63.5065 62.4055C63.7396 61.7841 63.8173 61.2403 63.6619 61.2403C63.5065 61.2403 62.9627 61.7841 62.4189 62.4055Z"
            />
            <path
                fill="currentColor"
                d="M22.1011 110.647C22.1011 111.502 22.3341 111.735 22.5672 111.113C22.8002 110.57 22.7225 109.87 22.4895 109.637C22.2564 109.327 22.0234 109.793 22.1011 110.647Z"
            />
            <path
                fill="currentColor"
                d="M93.1823 246.75C94.5029 247.604 97.6103 248.847 100.174 249.546C102.66 250.323 105.922 251.411 107.321 252.032C113.924 255.062 137.773 257.16 148.649 255.606L153.698 254.907L149.814 254.751C147.717 254.751 140.725 254.518 134.277 254.363C118.896 253.974 110.506 252.188 92.3278 245.74C91.4733 245.429 91.8617 245.895 93.1823 246.75Z"
            />
            <path
                fill="currentColor"
                d="M143.211 262.52C143.211 263.452 146.862 263.996 149.348 263.53C153.154 262.753 152.144 261.898 147.483 261.976C145.153 261.976 143.211 262.209 143.211 262.52Z"
            />
        </svg>
    );
};

export default Logo;