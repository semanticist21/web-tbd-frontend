import { Input } from '@chakra-ui/react'

const LoginPage = () => {
  return (
    <div className="h-dvh flex items-center justify-center overflow-auto p-8">
      <div className="w-128 h-144 bg-white rounded-xl px-8 py-6 border">
        <h1 className="text-h1">Login</h1>

        <Input variant="flushed"></Input>
      </div>
    </div>
  )
}

export default LoginPage
