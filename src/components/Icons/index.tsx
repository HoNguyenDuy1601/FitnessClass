interface IIconsProps {
    height?: string;
    className?: string;
}

export const Growth = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
                fill="#00B69B"
            />
        </svg>
    );
};

export const Down = () => {
    return (
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14 12L16.29 9.71L11.41 4.83L7.41 8.83L0 1.41L1.41 0L7.41 6L11.41 2L17.71 8.29L20 6V12H14Z"
                fill="#F93C65"
            />
        </svg>
    );
};

export const Ring = () => {
    return (
        <svg width="24" height="26" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.98604 0C7.69165 0 5.76465 1.72617 5.51315 4.00673L4.46625 13.5H1.5C0.671573 13.5 0 14.1716 0 15V16.5C0 17.3284 0.671573 18 1.5 18H22.3201C23.1486 18 23.8201 17.3284 23.8201 16.5V15C23.8201 14.1716 23.1486 13.5 22.3201 13.5H19.3539L18.307 4.00674C18.0555 1.72618 16.1285 0 13.8341 0H9.98604Z"
                fill="#4880FF"
            />
            <rect opacity="0.3" x="8.93262" y="19.5" width="5.95502" height="6" rx="2.25" fill="#FF0000" />
        </svg>
    );
};

export const Info = () => {
    return (
        <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect width="20" height="21.8182" fill="url(#pattern0)" />
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_94_3341" transform="matrix(0.00852273 0 0 0.0078125 -0.0454545 0)" />
                </pattern>
                <image
                    id="image0_94_3341"
                    width="128"
                    height="128"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
};

export const Empty: React.FC<IIconsProps> = () => (
    <svg width="184" height="152" viewBox="0 0 184 152" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
            <g transform="translate(24 31.67)">
                <ellipse fillOpacity=".8" fill="#F5F5F7" cx="67.797" cy="106.89" rx="67.797" ry="12.668"></ellipse>
                <path
                    d="M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z"
                    fill="#AEB8C2"
                ></path>
                <path
                    d="M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z"
                    fill="url(#linearGradient-1)"
                    transform="translate(13.56)"
                ></path>
                <path
                    d="M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
                    fill="#F5F5F7"
                ></path>
                <path
                    d="M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z"
                    fill="#DCE0E6"
                ></path>
            </g>
            <path
                d="M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z"
                fill="#DCE0E6"
            ></path>
            <g transform="translate(149.65 15.383)" fill="#FFF">
                <ellipse cx="20.654" cy="3.167" rx="2.849" ry="2.815"></ellipse>
                <path d="M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z"></path>
            </g>
        </g>
    </svg>
);

export const TrainingPrograms = () => {
    return (
        <svg
            width="65"
            height="60"
            viewBox="0 0 65 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <rect width="65" height="60" fill="url(#pattern0)" />
            <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlinkHref="#image0_149_1121" transform="matrix(0.005 0 0 0.00541667 0 -0.0416667)" />
                </pattern>
                <image
                    id="image0_149_1121"
                    width="200"
                    height="200"
                    xlinkHref="data:image/png;base64,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"
                />
            </defs>
        </svg>
    );
};
