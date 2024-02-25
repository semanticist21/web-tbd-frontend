'use client'

import KakaoLogo from '@/assets/svg/kakao.svg'
import NaverLogo from '@/assets/svg/naver.svg'
import Button from '@/components/common/button'
import CheckBox from '@/components/common/checkbox'
import InputEmail from '@/components/common/input_email'
import InputPassword from '@/components/common/input_password'
import LinkSmall from '@/components/common/link_small'
import { OInputLogin, TInputLogin } from '@/types/input_login'
import { NullableRecord } from '@/types/type'
import { createHandleClearInput, createHandleInput } from '@/util/handler'
import { useState } from 'react'
import { PiLockKeyThin } from 'react-icons/pi'
import { PiFinnTheHumanThin } from 'react-icons/pi'

const LoginPage = () => {
  // state props
  const [inputs, setInputs] = useState<NullableRecord<TInputLogin>>({})

  // handlers
  const inputHandler = createHandleInput(inputs, setInputs)
  const clearHandler = createHandleClearInput(inputs, setInputs)

  return (
    <div className="h-dvh flex items-center justify-center overflow-auto p-8">
      <div className="md:w-112 md:h-144 w-96 h-136 bg-white rounded-xl md:px-12 md:py-6 px-8 py-6 border flex flex-col">
        <h1 className="text-h1 select-none">Login</h1>

        <div className="flex flex-col space-y-4 mt-6">
          <InputEmail
            name={OInputLogin.email}
            placeholder="이메일 ID를 입력하세요."
            icon={<PiFinnTheHumanThin />}
            onChange={inputHandler}
            onClear={clearHandler}
          />

          <InputPassword
            name={OInputLogin.password}
            placeholder="패스워드를 입력하세요."
            icon={<PiLockKeyThin />}
            onChange={inputHandler}
            onClear={clearHandler}
          />

          <div className="flex justify-between">
            <CheckBox label="로그인 상태 유지" />
            <LinkSmall
              className="mt-0"
              href="/forgot-password"
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
          href="/sign-up"
          preDescription="아이디가 없으신가요?"
          content="회원가입 하기"
        />

        <p className="text-red-500 text-xs text-center mt-1">
          아이디가 이메일 형식이 아닙니다.
        </p>

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
