import { Input } from '@chakra-ui/react'

const LoginPage = () => {
  return (
    <div className="tw-h-dvh tw-flex tw-items-center tw-justify-center tw-overflow-auto tw-p-8">
      <div className="tw-w-128 tw-h-144 tw-bg-white tw-rounded-xl tw-px-8 tw-py-6 tw-border">
        <h1 className="tw-text-h1">Login</h1>

        <Input variant="flushed"></Input>
      </div>
    </div>
  )
}

export default LoginPage
