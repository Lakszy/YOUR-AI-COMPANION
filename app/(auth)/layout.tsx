const AuthLayout =({
    children
}:{
    children: React.ReactNode;
}) =>{
  return (
    <div className="bg-[url('view2.png')] hover:bg-[url('lakshay.jpeg')] flex items-center justify-center h-full w-full">{children}</div>
  )
}

export default AuthLayout
// bg-gradient-to-l hover:bg-gradient-to-r from-cyan-500 to-blue-500