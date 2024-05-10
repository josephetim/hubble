

export default function RootLayout({ children }) {
    return (
     <div>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300..900&display=swap" rel="stylesheet" />

        <body style={{fontFamily:"Darker Grotesque"}}>
            {children}</body>
      </div>
    )
  }