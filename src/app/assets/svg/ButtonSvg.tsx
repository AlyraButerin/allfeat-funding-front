const ButtonSvg = ({white}: {white: boolean}) => (
    <>
      <svg
        className="absolute top-0 left-0 dark:text-gray-950 text-gray-50"
        width="21"
        height="44"
        viewBox="0 0 21 44"
      >
        <path
          fill="currentColor"
          stroke="currentColor" // mentioned in ButtonGradient.jsx
          strokeWidth="2"
          d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
        />
      </svg>
      <svg
        className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)] dark:text-gray-950 text-gray-50"
        height="44"
        viewBox="0 0 100 44"
        preserveAspectRatio="none"
        fill="currentColor"
      >
        {white ? (
          <polygon
            fill="currentColor"
            fillRule="nonzero"
            points="100 0 100 44 0 44 0 0"
          />
        ) : (
          <>
            <polygon
              fill="currentColor" // mentioned in ButtonGradient.jsx
              fillRule="nonzero"
              points="100 42 100 44 0 44 0 42"
            />
            <polygon
              fill="currentColor" // mentioned in ButtonGradient.jsx
              fillRule="nonzero"
              points="100 0 100 2 0 2 0 0"
            />
          </>
        )}
      </svg>
      <svg
        className="absolute top-0 right-0 dark:text-gray-950 text-gray-50"
        width="21"
        height="44"
        viewBox="0 0 21 44"
      >
        <path
          fill="currentColor"
          stroke="currentColor" // mentioned in ButtonGradient.jsx
          strokeWidth="2"
          d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
        />
      </svg>
    </>
  );
  
  export default ButtonSvg;