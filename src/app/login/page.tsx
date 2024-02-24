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
        <h1 className="text-h1 select-none">Login</h1>

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

          <Link
            className="text-blue-500 text-xs text-left hover:opacity-75"
            href="/"
          >
            비밀번호를 잊으셨나요?
          </Link>
        </div>
        <Button className="flex justify-center w-full mt-4" onClick={() => {}}>
          로그인 하기
        </Button>

        <p className="text-xs mt-2 text-center">
          <span className="">아이디가 없으신가요?</span>
          <Link href="/signup">
            <span className="text-blue-500 hover:opacity-75">
              &nbsp; 회원가입 하기
            </span>
          </Link>
        </p>

        <div className="mt-auto flex flex-col space-y-3">
          <button className="bg-[#4267B2] h-12 rounded-md flex text-white items-center p-2 text-sm hover:opacity-90 border border-transparent">
            <div className="flex-1 text-center">페이스북으로 로그인</div>
          </button>

          <button className="bg-white h-12 rounded-md flex items-center p-2 text-sm border border-gray-500 hover:opacity-90 text-gray-500">
            <div className="flex-1 text-center">구글로 로그인</div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
