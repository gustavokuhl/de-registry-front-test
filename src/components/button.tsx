function Button({
  children,
  className,
  onClick,
}: Readonly<{
  children: React.ReactNode
  className?: string
  onClick?: () => {}
}>) {
  return (
    <button
      onClick={onClick}
      className={`p-2 border-2 border-stone-300 rounded-md ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
