interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  color?: string;
}

export const ChevronIcon = ({
  width = 24,
  height = 24,
  type = "right",
  className,
  ...props
}: { type: "right" | "left" | "up" | "down" } & IconProps) => {
  const paths = {
    right: "M5.5 13L10.5 8L5.5 3",
    left: "M10.5 13L5.5 8L10.5 3",
    up: "M3 10.5L8 5.5L13 10.5",
    down: "M3 5.5L8 10.5L13 5.5",
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}>
      <path d={paths[type]} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
};

export const ArrowIcon = ({
  width = 24,
  height = 24,
  type = "down",
  className,
  ...props
}: { type: "right" | "left" | "up" | "down" } & IconProps) => {
  const paths = {
    right: ["M3 12H21", "M15 6L21 12L15 18"],
    left: ["M21 12H3", "M9 18L3 12L9 6"],
    up: ["M12 21V3", "M6 9L12 3L18 9"],
    down: ["M12 3V21", "M6 15L12 21L18 15"],
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      {...props}>
      {paths[type].map((d, index) => (
        <path key={index} d={d} stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      ))}
    </svg>
  );
};

export const RefreshIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path d="M22 12L19 15L16 12" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path
      d="M11 20C6.58172 20 3 16.4183 3 12C3 7.58172 6.58172 4 11 4C15.4183 4 19 7.58172 19 12V14"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const DownLoadIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path d="M12 3V16" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M7 12L12 17L17 12" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M20 21H4" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const UpLoadIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path d="M12 17V4" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M7 8L12 3L17 8" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M20 21H4" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const SwapIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}>
    <path d="M4 8L7 5L10 8" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M7 20L7 6" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M20 17L17 20L14 17" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M17 5L17 19" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const HamburgerIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}>
    <path d="M4 7H20" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M4 12H20" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M4 17H20" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const ListIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path d="M9 7H20" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M9 12H20" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M9 17H20" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 8C5.55228 8 6 7.55228 6 7C6 6.44772 5.55228 6 5 6C4.44772 6 4 6.44772 4 7C4 7.55228 4.44772 8 5 8Z"
      fill={stroke}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
      fill={stroke}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 18C5.55228 18 6 17.5523 6 17C6 16.4477 5.55228 16 5 16C4.44772 16 4 16.4477 4 17C4 17.5523 4.44772 18 5 18Z"
      fill={stroke}
    />
  </svg>
);

export const EllipsisIcon = ({
  width = 24,
  height = 24,
  type = "horizontal",
  stroke = "currentColor",
  className,
  ...props
}: IconProps & { type: "horizontal" | "vertical" }) => {
  const paths = {
    horizontal: [
      "M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z",
      "M6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44772 13 6 13Z",
      "M18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12C17 12.5523 17.4477 13 18 13Z",
    ],
    vertical: [
      "M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z",
      "M11 6C11 6.55228 11.4477 7 12 7C12.5523 7 13 6.55228 13 6C13 5.44772 12.5523 5 12 5C11.4477 5 11 5.44772 11 6Z",
      "M11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17C11.4477 17 11 17.4477 11 18Z",
    ],
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}>
      {paths[type].map((d, index) => (
        <path key={index} fillRule="evenodd" clipRule="evenodd" d={d} fill={stroke} />
      ))}
    </svg>
  );
};

export const EllipseIcon = ({ width = 8, height = 8, className, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 8 8"
    fill="none"
    className={className}
    {...props}>
    <circle cx={4} cy={4} r={4} fill="currentColor" />
  </svg>
);

export const EditIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      d="M4 19.9999H3.3C3.3 20.3865 3.6134 20.6999 4 20.6999V19.9999ZM20 20.6999C20.3866 20.6999 20.7 20.3865 20.7 19.9999C20.7 19.6133 20.3866 19.2999 20 19.2999V20.6999ZM4 15.9999L3.50502 15.5049C3.37375 15.6362 3.3 15.8142 3.3 15.9999H4ZM14.8686 5.13122L14.3737 4.63624L14.3737 4.63624L14.8686 5.13122ZM17.1313 5.13122L16.6364 5.62619L17.1313 5.13122ZM18.8686 6.86848L19.3636 6.3735V6.3735L18.8686 6.86848ZM18.8686 9.13122L18.3737 8.63624L18.3737 8.63624L18.8686 9.13122ZM8 19.9998L8 20.6998C8.18565 20.6998 8.3637 20.6261 8.49497 20.4948L8 19.9998ZM19.5369 7.69088L20.2026 7.47456L19.5369 7.69088ZM19.5369 8.30883L18.8711 8.09252V8.09252L19.5369 8.30883ZM15.691 4.46301L15.4747 3.79727L15.691 4.46301ZM16.3091 4.46301L16.5254 3.79727L16.3091 4.46301ZM12.495 7.5049C12.2216 7.23153 11.7784 7.23153 11.505 7.5049C11.2317 7.77826 11.2317 8.22148 11.505 8.49485L12.495 7.5049ZM15.505 12.4948C15.7784 12.7682 16.2216 12.7682 16.495 12.4948C16.7683 12.2215 16.7683 11.7783 16.495 11.5049L15.505 12.4948ZM4 19.9999V20.6999H20V19.9999V19.2999H4V19.9999ZM4 19.9999H4.7V15.9999H4H3.3V19.9999H4ZM4 15.9999L4.49498 16.4948L15.3636 5.62619L14.8686 5.13122L14.3737 4.63624L3.50502 15.5049L4 15.9999ZM17.1313 5.13122L16.6364 5.62619L18.3736 7.36345L18.8686 6.86848L19.3636 6.3735L17.6263 4.63624L17.1313 5.13122ZM18.8686 9.13122L18.3737 8.63624L7.50503 19.5049L8 19.9998L8.49497 20.4948L19.3636 9.62619L18.8686 9.13122ZM8 19.9998L8 19.2998L4 19.2999L4 19.9999L4 20.6999L8 20.6998L8 19.9998ZM18.8686 6.86848L18.3736 7.36345C18.5798 7.56963 18.7043 7.69489 18.7898 7.79559C18.87 7.89005 18.874 7.91592 18.8711 7.90719L19.5369 7.69088L20.2026 7.47456C20.1256 7.2375 19.9934 7.05018 19.8571 6.88953C19.726 6.73512 19.5534 6.56334 19.3636 6.3735L18.8686 6.86848ZM18.8686 9.13122L19.3636 9.62619C19.5534 9.43635 19.726 9.26458 19.8571 9.11016C19.9935 8.9495 20.1256 8.7622 20.2026 8.52514L19.5369 8.30883L18.8711 8.09252C18.874 8.08379 18.87 8.10967 18.7898 8.20412C18.7043 8.30481 18.5798 8.43007 18.3737 8.63624L18.8686 9.13122ZM19.5369 7.69088L18.8711 7.90719C18.8907 7.96744 18.8907 8.03227 18.8711 8.09252L19.5369 8.30883L20.2026 8.52514C20.3135 8.18371 20.3135 7.816 20.2026 7.47456L19.5369 7.69088ZM14.8686 5.13122L15.3636 5.62619C15.5698 5.42003 15.695 5.29555 15.7957 5.21008C15.8902 5.12991 15.916 5.12591 15.9073 5.12875L15.691 4.46301L15.4747 3.79727C15.2377 3.87429 15.0504 4.00639 14.8897 4.14278C14.7353 4.27386 14.5635 4.44639 14.3737 4.63624L14.8686 5.13122ZM17.1313 5.13122L17.6263 4.63624C17.4365 4.44643 17.2648 4.2739 17.1104 4.14283C16.9498 4.00644 16.7625 3.8743 16.5254 3.79727L16.3091 4.46301L16.0928 5.12875C16.084 5.1259 16.1098 5.12986 16.2043 5.21003C16.3049 5.29552 16.4302 5.41999 16.6364 5.62619L17.1313 5.13122ZM15.691 4.46301L15.9073 5.12875C15.9676 5.10917 16.0325 5.10917 16.0928 5.12875L16.3091 4.46301L16.5254 3.79727C16.184 3.68633 15.8161 3.68633 15.4747 3.79727L15.691 4.46301ZM12 7.99987L11.505 8.49485L15.505 12.4948L16 11.9999L16.495 11.5049L12.495 7.5049L12 7.99987Z"
      fill={stroke}
    />
  </svg>
);

export const ChartIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      d="M21.0002 20H6.2002C5.08009 20 4.51962 20 4.0918 19.782C3.71547 19.5902 3.40973 19.2844 3.21799 18.908C3 18.4802 3 17.9201 3 16.8V5M21 7L15.1543 12.115C14.4542 12.7275 14.1041 13.0339 13.7207 13.161C13.2685 13.311 12.7775 13.2946 12.3363 13.1149C11.9623 12.9625 11.6336 12.6337 10.9758 11.9759C10.3323 11.3324 10.0105 11.0106 9.64355 10.8584C9.21071 10.6788 8.72875 10.6569 8.28142 10.7965C7.90221 10.9149 7.55252 11.2062 6.8534 11.7888L3 15"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChatDotIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}>
    <path
      d="M21 14.8V7.19995V7.19666C21 6.07875 21 5.51945 20.7822 5.09204C20.5905 4.71572 20.2841 4.40973 19.9078 4.21799C19.48 4 18.9203 4 17.8002 4H6.2002C5.08009 4 4.51962 4 4.0918 4.21799C3.71547 4.40973 3.40973 4.71572 3.21799 5.09204C3 5.51986 3 6.07985 3 7.19995V18.671C3 19.7367 3 20.2696 3.21846 20.5432C3.40845 20.7813 3.69644 20.9197 4.00098 20.9194C4.35115 20.919 4.76744 20.5861 5.59961 19.9203L7.12357 18.7012C7.44844 18.4413 7.61084 18.3114 7.79172 18.219C7.95219 18.137 8.12279 18.0771 8.29932 18.0408C8.49829 18 8.70652 18 9.12256 18H17.8001C18.9202 18 19.48 18 19.9078 17.782C20.2841 17.5902 20.5905 17.2844 20.7822 16.908C21 16.4806 21 15.9212 21 14.8032V14.8Z"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 10C7.44772 10 7 10.4477 7 11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11C9 10.4477 8.55228 10 8 10Z"
      fill={stroke}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 10C11.4477 10 11 10.4477 11 11C11 11.5523 11.4477 12 12 12C12.5523 12 13 11.5523 13 11C13 10.4477 12.5523 10 12 10Z"
      fill={stroke}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 10C15.4477 10 15 10.4477 15 11C15 11.5523 15.4477 12 16 12C16.5523 12 17 11.5523 17 11C17 10.4477 16.5523 10 16 10Z"
      fill={stroke}
    />
  </svg>
);

export const UserIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      d="M17.2166 19.3323C15.9349 17.9008 14.0727 17 12 17C9.92734 17 8.06492 17.9008 6.7832 19.3323M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11C15 12.6569 13.6569 14 12 14Z"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ActivityIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      d="M21 14H18L15 7L10 17L7 11L5 14H3"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const EmailIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path d="M3 6L12 14L21 6" stroke={stroke} strokeWidth="1.4" strokeLinejoin="round" />
    <rect
      x="3"
      y="6"
      width="18"
      height="12"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PasswordIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path d="M21 16V12H12" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 16C9.20914 16 11 14.2091 11 12C11 9.79086 9.20914 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16Z"
      stroke={stroke}
      strokeWidth="1.4"
    />
    <path d="M17 15V12" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const HeartIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      d="M12 21L10.55 19.7052C5.4 15.1243 2 12.103 2 8.3951C2 5.37384 4.42 3 7.5 3C9.24 3 10.91 3.79455 12 5.05014C13.09 3.79455 14.76 3 16.5 3C19.58 3 22 5.37384 22 8.3951C22 12.103 18.6 15.1243 13.45 19.715L12 21Z"
      stroke={stroke}
      strokeWidth="1.4"
    />
  </svg>
);

export const FollowersIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.9761 7.36049C13.9761 9.70533 12.075 11.6053 9.73137 11.6053C7.38654 11.6053 5.48535 9.70533 5.48535 7.36049C5.48535 5.01565 7.38654 3.11572 9.73137 3.11572C12.075 3.11572 13.9761 5.01565 13.9761 7.36049Z"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="square"
    />
    <path
      d="M13.9068 5.73099C14.5 5.07681 15.3568 4.66602 16.3096 4.66602C18.0991 4.66602 19.5509 6.11679 19.5509 7.90729C19.5509 9.69778 18.0991 11.1486 16.3096 11.1486C15.167 11.1486 14.1624 10.5578 13.585 9.66499"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="square"
    />
    <path
      d="M9.76408 14.7071C12.8915 14.6991 15.5507 16.135 16.5282 19.2261C14.558 20.4272 12.2389 20.8898 9.76408 20.8837C7.28921 20.8898 4.97016 20.4272 3 19.2261C3.97857 16.1317 6.63327 14.6991 9.76408 14.7071Z"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="square"
    />
    <path
      d="M16.3352 18.2323C18.225 18.237 19.9958 17.8837 21.5002 16.9666C20.7539 14.6063 18.7233 13.5098 16.3352 13.5159C14.8309 13.512 13.4705 13.9438 12.4824 14.8531"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="square"
    />
  </svg>
);

export const SettingsIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      d="M12.5591 3L12.5593 2.3H12.5591V3ZM14.4556 4.36719L13.7916 4.5887L13.7916 4.58886L14.4556 4.36719ZM14.8726 5.61621L14.2086 5.83788L14.3056 6.12851L14.585 6.2544L14.8726 5.61621ZM16.0903 6.32129L15.6808 6.88895L15.9299 7.06869L16.2308 7.00705L16.0903 6.32129ZM17.3823 6.05664L17.2421 5.37083L17.2419 5.37088L17.3823 6.05664ZM19.5152 7.0166L18.9089 7.3666L18.909 7.3668L19.5152 7.0166ZM20.0737 7.9834L20.68 7.6334L20.6799 7.6332L20.0737 7.9834ZM19.8384 10.3105L20.3616 10.7756L20.3622 10.7749L19.8384 10.3105ZM18.9644 11.2939L18.4412 10.8289L18.2373 11.0583L18.2679 11.3637L18.9644 11.2939ZM18.9644 12.7051L18.2678 12.6354L18.2373 12.9405L18.4409 13.1698L18.9644 12.7051ZM19.8384 13.6895L20.3622 13.2251L20.3618 13.2247L19.8384 13.6895ZM20.0737 16.0166L20.6799 16.3668L20.68 16.3666L20.0737 16.0166ZM19.5152 16.9834L18.909 16.6332L18.9089 16.6334L19.5152 16.9834ZM17.3823 17.9434L17.2414 18.629L17.2421 18.6292L17.3823 17.9434ZM16.0903 17.6777L16.2313 16.9921L15.9301 16.9301L15.6807 17.1101L16.0903 17.6777ZM14.8726 18.3828L14.5849 17.7446L14.3055 17.8706L14.2085 18.1613L14.8726 18.3828ZM14.4556 19.6328L13.7916 19.4113V19.4113L14.4556 19.6328ZM12.5591 21V21.7H12.5593L12.5591 21ZM9.54445 19.6328L10.2085 19.4113L10.2085 19.4113L9.54445 19.6328ZM9.12746 18.3828L9.79148 18.1613L9.6945 17.8706L9.41512 17.7447L9.12746 18.3828ZM7.90871 17.6777L8.31842 17.1102L8.06897 16.9301L7.76764 16.9921L7.90871 17.6777ZM6.61769 17.9434L6.75785 18.6292L6.75876 18.629L6.61769 17.9434ZM4.48488 16.9834L5.0911 16.6334L5.09098 16.6332L4.48488 16.9834ZM3.92628 16.0166L3.32007 16.3666L3.32018 16.3668L3.92628 16.0166ZM4.16261 13.6895L4.68635 14.1539L4.68654 14.1537L4.16261 13.6895ZM5.03566 12.7041L5.55959 13.1683L5.76262 12.9392L5.73219 12.6345L5.03566 12.7041ZM5.03566 11.2949L5.73218 11.3646L5.76268 11.0597L5.55936 10.8304L5.03566 11.2949ZM4.16261 10.3105L3.63887 10.775L3.63891 10.775L4.16261 10.3105ZM3.92628 7.9834L3.32018 7.6332L3.32007 7.6334L3.92628 7.9834ZM4.48488 7.0166L5.09098 7.3668L5.0911 7.3666L4.48488 7.0166ZM6.61769 6.05664L6.75826 5.3709L6.75785 5.37082L6.61769 6.05664ZM7.90871 6.32129L7.76813 7.00703L8.06919 7.06874L8.31837 6.88889L7.90871 6.32129ZM9.12746 5.61621L9.41508 6.25439L9.69441 6.1285L9.79143 5.83788L9.12746 5.61621ZM9.54445 4.36719L10.2084 4.58886L10.2085 4.58867L9.54445 4.36719ZM12.5591 3L12.5589 3.7C13.1181 3.70013 13.6145 4.05796 13.7916 4.5887L14.4556 4.36719L15.1196 4.14567C14.752 3.04383 13.7211 2.30027 12.5593 2.3L12.5591 3ZM14.4556 4.36719L13.7916 4.58886L14.2086 5.83788L14.8726 5.61621L15.5365 5.39454L15.1196 4.14552L14.4556 4.36719ZM14.8726 5.61621L14.585 6.2544C14.9722 6.42889 15.3387 6.64211 15.6808 6.88895L16.0903 6.32129L16.4999 5.75363C16.0833 5.45299 15.6352 5.19211 15.1602 4.97802L14.8726 5.61621ZM16.0903 6.32129L16.2308 7.00705L17.5228 6.7424L17.3823 6.05664L17.2419 5.37088L15.9499 5.63553L16.0903 6.32129ZM17.3823 6.05664L17.5226 6.74245C18.0704 6.63042 18.629 6.88179 18.9089 7.3666L19.5152 7.0166L20.1214 6.6666C19.5405 5.66051 18.3808 5.13796 17.2421 5.37083L17.3823 6.05664ZM19.5152 7.0166L18.909 7.3668L19.4676 8.33359L20.0737 7.9834L20.6799 7.6332L20.1213 6.66641L19.5152 7.0166ZM20.0737 7.9834L19.4675 8.3334C19.7473 8.81801 19.6856 9.42761 19.3146 9.8462L19.8384 10.3105L20.3622 10.7749C21.1331 9.9053 21.2609 8.63966 20.68 7.6334L20.0737 7.9834ZM19.8384 10.3105L19.3152 9.84552L18.4412 10.8289L18.9644 11.2939L19.4876 11.759L20.3616 10.7756L19.8384 10.3105ZM18.9644 11.2939L18.2679 11.3637C18.289 11.5747 18.3005 11.7869 18.3005 12H19.0005H19.7005C19.7005 11.7365 19.6863 11.4776 19.6609 11.2242L18.9644 11.2939ZM19.0005 12H18.3005C18.3005 12.2127 18.2889 12.4245 18.2678 12.6354L18.9644 12.7051L19.6609 12.7748C19.6862 12.5219 19.7005 12.2634 19.7005 12H19.0005ZM18.9644 12.7051L18.4409 13.1698L19.3149 14.1542L19.8384 13.6895L20.3618 13.2247L19.4878 12.2403L18.9644 12.7051ZM19.8384 13.6895L19.3146 14.1538C19.6856 14.5724 19.7473 15.182 19.4675 15.6666L20.0737 16.0166L20.68 16.3666C21.2609 15.3603 21.1331 14.0947 20.3622 13.2251L19.8384 13.6895ZM20.0737 16.0166L19.4676 15.6664L18.909 16.6332L19.5152 16.9834L20.1213 17.3336L20.6799 16.3668L20.0737 16.0166ZM19.5152 16.9834L18.9089 16.6334C18.629 17.1182 18.0704 17.3696 17.5226 17.2576L17.3823 17.9434L17.2421 18.6292C18.3808 18.862 19.5405 18.3395 20.1214 17.3334L19.5152 16.9834ZM17.3823 17.9434L17.5233 17.2577L16.2313 16.9921L16.0903 17.6777L15.9494 18.3634L17.2414 18.629L17.3823 17.9434ZM16.0903 17.6777L15.6807 17.1101C15.3387 17.3569 14.9722 17.5701 14.5849 17.7446L14.8726 18.3828L15.1602 19.021C15.6352 18.8069 16.0832 18.5461 16.5 18.2454L16.0903 17.6777ZM14.8726 18.3828L14.2085 18.1613L13.7916 19.4113L14.4556 19.6328L15.1196 19.8543L15.5366 18.6043L14.8726 18.3828ZM14.4556 19.6328L13.7916 19.4113C13.6145 19.942 13.1181 20.2999 12.5589 20.3L12.5591 21L12.5593 21.7C13.7211 21.6997 14.752 20.9562 15.1196 19.8543L14.4556 19.6328ZM12.5591 21V20.3H11.4419V21V21.7H12.5591V21ZM11.4419 21V20.3C10.8823 20.3 10.3855 19.942 10.2085 19.4113L9.54445 19.6328L8.88041 19.8543C9.24809 20.9566 10.28 21.7 11.4419 21.7V21ZM9.54445 19.6328L10.2085 19.4113L9.79148 18.1613L9.12746 18.3828L8.46343 18.6043L8.88042 19.8543L9.54445 19.6328ZM9.12746 18.3828L9.41512 17.7447C9.02705 17.5697 8.66012 17.3568 8.31842 17.1102L7.90871 17.6777L7.49899 18.2453C7.91645 18.5467 8.36508 18.807 8.83979 19.021L9.12746 18.3828ZM7.90871 17.6777L7.76764 16.9921L6.47662 17.2577L6.61769 17.9434L6.75876 18.629L8.04978 18.3634L7.90871 17.6777ZM6.61769 17.9434L6.47754 17.2575C5.92964 17.3695 5.37092 17.1181 5.0911 16.6334L4.48488 16.9834L3.87866 17.3334C4.45952 18.3395 5.61931 18.8619 6.75785 18.6292L6.61769 17.9434ZM4.48488 16.9834L5.09098 16.6332L4.53239 15.6664L3.92628 16.0166L3.32018 16.3668L3.87877 17.3336L4.48488 16.9834ZM3.92628 16.0166L4.5325 15.6666C4.25295 15.1824 4.3148 14.5729 4.68635 14.1539L4.16261 13.6895L3.63887 13.225C2.86812 14.0942 2.73875 15.3597 3.32007 16.3666L3.92628 16.0166ZM4.16261 13.6895L4.68654 14.1537L5.55959 13.1683L5.03566 12.7041L4.51173 12.2399L3.63868 13.2252L4.16261 13.6895ZM5.03566 12.7041L5.73219 12.6345C5.71133 12.4257 5.7005 12.214 5.7005 12H5.0005H4.3005C4.3005 12.2613 4.31372 12.5194 4.33913 12.7737L5.03566 12.7041ZM5.0005 12H5.7005C5.7005 11.7855 5.71128 11.5735 5.73218 11.3646L5.03566 11.2949L4.33914 11.2253C4.31364 11.4801 4.3005 11.7385 4.3005 12H5.0005ZM5.03566 11.2949L5.55936 10.8304L4.68631 9.84607L4.16261 10.3105L3.63891 10.775L4.51196 11.7594L5.03566 11.2949ZM4.16261 10.3105L4.68635 9.84612C4.3148 9.42711 4.25295 8.81759 4.5325 8.3334L3.92628 7.9834L3.32007 7.6334C2.73875 8.64026 2.86812 9.90579 3.63887 10.775L4.16261 10.3105ZM3.92628 7.9834L4.53239 8.33359L5.09098 7.3668L4.48488 7.0166L3.87877 6.66641L3.32018 7.6332L3.92628 7.9834ZM4.48488 7.0166L5.0911 7.3666C5.37092 6.88194 5.92964 6.6305 6.47754 6.74247L6.61769 6.05664L6.75785 5.37082C5.61931 5.13814 4.45952 5.66052 3.87866 6.6666L4.48488 7.0166ZM6.61769 6.05664L6.47712 6.74238L7.76813 7.00703L7.90871 6.32129L8.04928 5.63555L6.75826 5.3709L6.61769 6.05664ZM7.90871 6.32129L8.31837 6.88889C8.66013 6.64223 9.02714 6.42923 9.41508 6.25439L9.12746 5.61621L8.83983 4.97803C8.36508 5.192 7.91639 5.45246 7.49904 5.75369L7.90871 6.32129ZM9.12746 5.61621L9.79143 5.83788L10.2084 4.58886L9.54445 4.36719L8.88047 4.14552L8.46348 5.39454L9.12746 5.61621ZM9.54445 4.36719L10.2085 4.58867C10.3855 4.05804 10.8823 3.7 11.4419 3.7V3V2.3C10.28 2.3 9.24809 3.04337 8.88041 4.1457L9.54445 4.36719ZM11.4419 3V3.7H12.5591V3V2.3H11.4419V3Z"
      fill={stroke}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
      stroke={stroke}
      strokeWidth="1.4"
    />
  </svg>
);

export const BellIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 4C15.3137 4 18 6.68624 18 9.99995C18 11.9131 18 13.8341 18 15C18 18 20 19 20 19L4 19C4 19 6 18 6 15C6 13.8341 6 11.9131 6 9.99995C6 6.68624 8.68629 4 12 4V4Z"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M10 19C10 20.1046 10.8954 21 12 21C13.1046 21 14 20.1046 14 19"
      stroke={stroke}
      strokeWidth="1.4"
    />
  </svg>
);

export const TrashIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}>
    <path d="M19 7H5" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M14 4H10" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path
      d="M6 10V21H18C18 20 18 10 18 10"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const DeleteIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}>
    <path
      d="M19 18.3H9.82843C9.48365 18.3 9.15299 18.163 8.90919 17.9192L2.98995 12L8.90919 6.08076C9.15299 5.83696 9.48365 5.7 9.82843 5.7H19C20.2703 5.7 21.3 6.72975 21.3 8V16C21.3 17.2703 20.2703 18.3 19 18.3Z"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinejoin="bevel"
    />
    <path
      d="M15.8856 13.8856L12.1144 10.1144"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M15.8856 10.1144L12.1144 13.8856"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const StickerIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 3V11C21 16.5228 16.5228 21 11 21H3L3 3L21 3Z"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9 21C9 21 13 21 13 17V14C13 13.4477 13.4477 13 14 13H17C17 13 21 13 21 9"
      stroke={stroke}
      strokeWidth="1.4"
    />
  </svg>
);

export const ImageIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <rect
      x="21"
      y="3"
      width="18"
      height="18"
      transform="rotate(90 21 3)"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M3 14L7 10L18 21" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.5 10C14.8807 10 16 8.88071 16 7.5C16 6.11929 14.8807 5 13.5 5C12.1193 5 11 6.11929 11 7.5C11 8.88071 12.1193 10 13.5 10Z"
      stroke={stroke}
      strokeWidth="1.4"
    />
    <path d="M13.5 16.5L21 9" stroke={stroke} strokeWidth="1.4" />
  </svg>
);

export const LinkIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      d="M9 7C9 7 7 7 7 7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17C7 17 9 17 9 17"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path d="M8 12H16" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path
      d="M15 17C15 17 17 17 17 17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7C17 7 15 7 15 7"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const ExportIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path d="M12 3.231v12.778" stroke={stroke} strokeWidth={1.4} strokeLinecap="square" />
    <path
      d="M8.725 5.771 12 2.481l3.276 3.29"
      stroke={stroke}
      strokeWidth={1.4}
      strokeLinecap="square"
    />
    <path
      d="M16.625 10.995h4.625v10.524H2.75V10.995h4.625"
      stroke={stroke}
      strokeWidth={1.4}
      strokeLinecap="square"
    />
  </svg>
);

export const ShareIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path d="M12 15L12 5" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M9 7L12 4L15 7" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M4 14V20H20V14" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const ViewIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    className={className}
    {...props}>
    <path
      stroke={stroke}
      strokeLinecap="square"
      strokeWidth={1.4}
      d="M15.008 13.722a3.162 3.162 0 1 1-6.324-.001 3.162 3.162 0 0 1 6.324.001Z"
      clipRule="evenodd"
    />
    <path
      stroke={stroke}
      strokeLinecap="square"
      strokeWidth={1.4}
      d="M21.097 13.721c-1.961-4.128-5.444-6.604-9.252-6.604h.004c-3.808 0-7.291 2.476-9.252 6.604"
    />
  </svg>
);

export const LikeIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      fillRule="evenodd"
      d="M8.48149 9.43827C8.17078 9.80075 8 10.2624 8 10.7398V19C8 20.1046 8.89543 21 10 21H17.3308C18.2974 21 19.1257 20.3088 19.2986 19.3578L20.5713 12.3578C20.7945 11.1301 19.8514 10 18.6036 10H14L15.6279 5.11634C15.8414 4.47579 15.5514 3.77571 14.9475 3.47375V3.47375C14.3906 3.19532 13.7158 3.33161 13.3106 3.80431L8.48149 9.43827Z"
      stroke={stroke}
      strokeWidth="1.4"
    />
    <path d="M4 20V11" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const HateIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5185 16.5617C15.8292 16.1992 16 15.7376 16 15.2602L16 7C16 5.89543 15.1046 5 14 5H6.66915C5.70258 5 4.87432 5.69125 4.70141 6.64223L3.42869 13.6422C3.20547 14.8699 4.14862 16 5.39643 16H10L8.37211 20.8837C8.1586 21.5242 8.44858 22.2243 9.0525 22.5262V22.5262C9.60935 22.8047 10.2842 22.6684 10.6894 22.1957L15.5185 16.5617Z"
      stroke={stroke}
      strokeWidth="1.4"
    />
    <path d="M20 6V15" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const StarIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      fillRule="evenodd"
      d="M12.896 17.8441L7.07923 20.9021L8.19014 14.4251L3.48429 9.838L9.98761 8.89301L12.896 3L15.8044 8.89301L22.3077 9.838L17.6018 14.4251L18.7127 20.9021L12.896 17.8441Z"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FlagIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path d="M5 5V20" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path
      d="M5 6C5 6 6.75 4 9.375 4C12 4 14 6 16 6C18 6 19 5 19 5"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M5 15C5 15 6.75 13 9.375 13C12 13 14 15 16 15C18 15 19 14 19 14V5"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const SearchIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path d="M14.4121 14.4121L20 20" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16Z"
      stroke={stroke}
      strokeWidth="1.4"
    />
  </svg>
);

export const CameraIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 7L8.7396 5.8906C9.11053 5.3342 9.73499 5 10.4037 5H13.5963C14.265 5 14.8895 5.3342 15.2604 5.8906L16 7H21V18H3V7H8Z"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
      stroke={stroke}
      strokeWidth="1.4"
    />
  </svg>
);

export const LightHubIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 12C15 13 15 15 15 16C15 17 14 17 14 17H10C10 17 9 17 9 16C9 15 9 13 8 12C5.67396 9.67396 5.41422 6.10051 7.75736 3.75736C10.1005 1.41421 13.8995 1.41421 16.2426 3.75736C18.5858 6.10051 18.4069 9.59315 16 12Z"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path d="M10 21H14" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const TVIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      d="M20 8L20 20L4 20L4 8L20 8Z"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 4.08325L12 7.99992L16 4.08325"
      stroke="#0F1114"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const FilmIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      d="M16 10.0865L21 8.50839L21 16.5051L16.0018 14.9275"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16 7H3L3 18H16L16 7Z"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const VideoIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.6666 12L8.91663 17.25L8.91663 6.75L17.6666 12Z"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={stroke}
      strokeWidth="1.4"
    />
  </svg>
);

export const SaveIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      fillRule="evenodd"
      d="M16.5858 3C16.851 3 17.1054 3.10536 17.2929 3.29289L21 7L21 20C21 20.5523 20.5523 21 20 21L4 21C3.44772 21 3 20.5523 3 20L3 4C3 3.44772 3.44772 3 4 3L16.5858 3Z"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="7"
      y="13"
      width="10"
      height="8"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <rect
      x="8"
      y="3"
      width="8"
      height="5"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

export const TagIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      fillRule="evenodd"
      d="M10 13C10.5523 13 11 12.5523 11 12C11 11.4477 10.5523 11 10 11C9.44772 11 9 11.4477 9 12C9 12.5523 9.44772 13 10 13Z"
      stroke={stroke}
      strokeWidth="1.4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.41421 18C8.149 18 7.89464 17.8946 7.70711 17.7071L2 12L7.70711 6.29289C7.89464 6.10536 8.149 6 8.41421 6H20C21.1046 6 22 6.89543 22 8V16C22 17.1046 21.1046 18 20 18H8.41421Z"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const BookMarkIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 6.65882V19.5858L12.5364 16.7487C12.2091 16.5407 11.7909 16.5407 11.4636 16.7487L7 19.5858L7 6.65882C7 5.19039 8.11929 4 9.5 4L14.5 4C15.8807 4 17 5.19039 17 6.65882Z"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const FileIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path d="M13 3V9H19" stroke={stroke} strokeWidth="1.4" strokeLinejoin="round" />
    <path
      d="M19 8L14 3L5 3.00002L5 21L19 21L19 8Z"
      stroke="#0F1114"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DangerIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path d="M12 10V13" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
      fill={stroke}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.1381 4.46529C11.5247 3.80798 12.4753 3.80798 12.8619 4.46529L21.1135 18.493C21.5057 19.1596 21.025 20 20.2516 20H3.74842C2.975 20 2.49435 19.1596 2.88648 18.493L11.1381 4.46529Z"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>
);

export const ErrorIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path d="M12 8V13" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
      fill={stroke}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={stroke}
      strokeWidth="1.4"
    />
  </svg>
);

export const HelpIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      d="M12 14C12 12 13.576 11.6653 14.1187 11.124C14.6631 10.5809 15 9.82977 15 9C15 7.34315 13.6569 6 12 6C11.1041 6 10.2999 6.39273 9.7502 7.01542C9.49603 7.30334 9.29626 7.64044 9.16699 8.01061"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={stroke}
      strokeWidth="1.4"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17Z"
      fill={stroke}
    />
  </svg>
);

export const InfoIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path d="M12 17V11" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 7C11.4477 7 11 7.44772 11 8C11 8.55228 11.4477 9 12 9C12.5523 9 13 8.55228 13 8C13 7.44772 12.5523 7 12 7Z"
      fill={stroke}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={stroke}
      strokeWidth="1.4"
    />
  </svg>
);

export const CircleCheckIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path d="M7 13L10 16L17 9" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={stroke}
      strokeWidth="1.4"
    />
  </svg>
);

export const CheckIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path d="M4 13L9 18L20 7" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const CircleIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={stroke}
      strokeWidth="1.4"
    />
  </svg>
);

export const XIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      d="M20.3438 20.3437L4.02031 4.02022"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
    <path
      d="M20.3437 4.02022L4.02025 20.3437"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
);

export const RemoveIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path d="M17 12H7" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={stroke}
      strokeWidth="1.4"
    />
  </svg>
);

export const AddIcon = ({
  width = 24,
  height = 24,
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path d="M17 12H7" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M12 17V7" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={stroke}
      strokeWidth="1.4"
    />
  </svg>
);

export const CancelIcon = () => {
  return <AddIcon className="rotate-45" />;
};

export const CircleCheckBoldIcon = ({
  width = 24,
  height = 24,
  color = "#FEFEFE",
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    {...props}>
    <path
      fillRule="evenodd"
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill={stroke}
      stroke={stroke}
      strokeWidth="1.4"
    />
    <path d="M7 13L10 16L17 9" stroke={color} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const PlusIcon = ({
  width = 24,
  height = 24,
  color = "#FEFEFE",
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 22 22"
    fill="none"
    className={className}
    {...props}>
    <path d="M21 11H1" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
    <path d="M11 21V1" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

export const TimeIcon = ({
  width = 24,
  height = 24,
  color = "#FEFEFE",
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="21"
    viewBox="0 0 20 21"
    fill="none"
    className={className}
    {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.9167 10.4998C17.9167 14.7573 14.4658 18.2082 10.2083 18.2082C5.95083 18.2082 2.5 14.7573 2.5 10.4998C2.5 6.24234 5.95083 2.7915 10.2083 2.7915C14.4658 2.7915 17.9167 6.24234 17.9167 10.4998Z"
      stroke={stroke}
      strokeWidth="1.16667"
      strokeLinecap="square"
    />
    <path
      d="M13.0684 12.9519L9.92676 11.0777V7.03857"
      stroke={stroke}
      strokeWidth="1.16667"
      strokeLinecap="square"
    />
  </svg>
);

export const PieChartIcon = ({
  width = 24,
  height = 24,
  color = "#FEFEFE",
  stroke = "currentColor",
  className,
  ...props
}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    className={className}
    {...props}>
    <path
      d="M18.4764 13.4961C18.4764 15.0296 18.0216 16.5287 17.1696 17.8039C16.3176 19.079 15.1066 20.0728 13.6898 20.6597C12.273 21.2465 10.714 21.4001 9.20987 21.1009C7.70578 20.8017 6.32418 20.0632 5.23979 18.9788C4.1554 17.8944 3.41692 16.5129 3.11774 15.0088C2.81855 13.5047 2.97211 11.9456 3.55897 10.5288C4.14584 9.11198 5.13967 7.901 6.41478 7.049C7.68988 6.197 9.189 5.74225 10.7226 5.74225L10.7226 13.4961H18.4764Z"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="square"
    />
    <path
      d="M13.7773 2.75018C15.8337 2.75018 17.8059 3.5671 19.26 5.02122C20.7141 6.47535 21.5311 8.44756 21.5311 10.504L13.7773 10.504L13.7773 2.75018Z"
      stroke={stroke}
      strokeWidth="1.4"
      strokeLinecap="square"
    />
  </svg>
);
