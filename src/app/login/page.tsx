'use client'

import Button from '@/components/common/button'
import Input from '@/components/common/input'
import InputPassword from '@/components/common/input_password'
import Link from 'next/link'
import { PiLockKeyThin } from 'react-icons/pi'
import { PiFinnTheHumanThin } from 'react-icons/pi'

const LoginPage = () => {
  return (
    <div className="h-dvh flex items-center justify-center overflow-auto p-8">
      <div className="w-96 h-128 bg-white rounded-xl px-8 py-6 border flex flex-col">
        <h1 className="text-h1">Login</h1>

        <div className="flex flex-col space-y-4 mt-6">
          <Input
            placeholder="이메일 ID를 입력하세요."
            icon={<PiFinnTheHumanThin />}
            onClear={() => {}}
          />

          <InputPassword
            placeholder="패스워드를 입력하세요."
            icon={<PiLockKeyThin />}
          />

          <Link className="text-blue-500 text-xs text-center" href="/">
            비밀번호를 잊으셨나요?
          </Link>
        </div>
        <Button className="flex justify-center w-full mt-24" onClick={() => {}}>
          로그인 하기
        </Button>
      </div>
    </div>
  )
}

export default LoginPage
