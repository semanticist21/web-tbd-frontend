'use client'

import KakaoLogo from '@/assets/svg/kakao.svg'
import NaverLogo from '@/assets/svg/naver.svg'
import Button from '@/components/common/button'
import CheckBox from '@/components/common/checkbox'
import Input from '@/components/common/input'
import InputPassword from '@/components/common/input_password'
import LinkSmall from '@/components/common/link_small'
import { ChangeEvent, useState } from 'react'
import { PiLockKeyThin } from 'react-icons/pi'
import { PiFinnTheHumanThin } from 'react-icons/pi'

const LoginPage = () => {
  // state props
  const [inputs, setInputs] = useState({})

  // handlers
  const handleInput = (e?: ChangeEvent<HTMLInputElement>) => {
    const id = e?.target.id
    const value = e?.target.value

    if (id && value) {
      setInputs({
        ...inputs,
        [id]: value,
      })
    }
  }

  return (
    <div className="h-dvh flex items-center justify-center overflow-auto p-8">
      <div className="md:w-112 md:h-144 w-96 h-136 bg-white rounded-xl md:px-12 md:py-6 px-8 py-6 border flex flex-col">
        <h1 className="text-h1 select-none">Login</h1>

        <div className="flex flex-col space-y-4 mt-6">
          <Input
            placeholder="이메일 ID를 입력하세요."
            icon={<PiFinnTheHumanThin />}
            onChange={() => {}}
            onClear={() => {}}
          />

          <InputPassword
            placeholder="패스워드를 입력하세요."
            icon={<PiLockKeyThin />}
            onChange={() => {}}
            onClear={() => {}}
          />

          <div className="flex justify-between">
            <CheckBox label="로그인 상태 유지" />
            <LinkSmall
              className="mt-0"
              href="/"
              content="비밀번호를 잊으셨나요?"
            />
          </div>
        </div>
        <Button
          className="flex justify-center w-full mt-4"
          onClick={() => {}}
        >
          로그인 하기
        </Button>

        <LinkSmall
          className="mt-3 text-center"
          href="/signup"
          preDescription="아이디가 없으신가요?"
          content="회원가입 하기"
        />

        <div className="mt-auto flex flex-col space-y-3">
          <button className="relative bg-bg-naver h-12 rounded-md text-white text-sm hover:opacity-90 border border-transparent text-wrap">
            <NaverLogo className="absolute left-4 top-4 bottom-0" />
            네이버로 시작하기
          </button>

          <button className="relative bg-bg-kakao text-fg-kakao  h-12 rounded-md p-2 text-sm hover:opacity-90 ">
            <KakaoLogo className="absolute left-4 top-4 bottom-0 w-5 h-5" />
            카카오로 시작하기
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
