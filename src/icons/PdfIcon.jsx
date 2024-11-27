

export const PdfIcon = ({
    fill = 'currentColor',
    filled,
    size,
    height,
    width,
    label,
    ...props
}) => {
    return (
        <svg
            width={size || width || 24}
            height={size || height || 24}
            viewBox="0 0 24 24"
            fill={filled ? fill : 'none'}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M6 2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-6-6H6ZM13 3.5V9h5.5L13 3.5ZM8 11h2.5a1.5 1.5 0 1 1 0 3H8v2h4v-1.5h-2.5v-1H12a2.5 2.5 0 0 0 0-5H8v3Zm8 1.5h1.5v1H16v-1ZM16 15v-3h3v3h-3Z"
                fill={fill}
            />
        </svg>
    );
};
