'use client'

import Button from '@/components/common/button'
import InputEmail from '@/components/common/input_email'
import LinkSmall from '@/components/common/link_small'
import { ROUTES } from '@/routes/routes'
import { OInputLogin } from '@/types/input_login'
import {
  createHandleClearSingleInput,
  createHandleSingleInput,
} from '@/util/handler'
import { useState } from 'react'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { IoArrowBack } from 'react-icons/io5'
import { PiFinnTheHumanThin } from 'react-icons/pi'

const ForgotPasswordPage = () => {
  // states
  const [email, setEmail] = useState<string>()
  const [hasVerifiedEmail, setHasVerifiedEmail] = useState<boolean>(false)

  // handlers
  const handler = createHandleSingleInput(email, setEmail)
  const clearHandler = createHandleClearSingleInput(setEmail)

  // submit
  const handleSubmit = () => {
    // step-1

    // step-2
    if (hasVerifiedEmail) {
    }
  }

  return (
    <div className="h-dvh flex items-center justify-center overflow-auto p-8">
      <div className="md:w-112 w-96 h-96 bg-white rounded-xl md:px-12 md:py-6 px-8 py-6 border flex flex-col">
        <h1 className="text-h2 select-none flex items-center space-x-3">
          <BsFillQuestionCircleFill className="text-blue-500" />
          <span>Find Password</span>
        </h1>
        <p className="text-fg-gray-desc text-xs mt-2 mb-6">
          가입 시 입력하신 이메일로 새로운 비밀번호를 만드실 수 있습니다.
        </p>

        <form
          className="h-full"
          onSubmit={() => {}}
        >
          <div className="flex flex-col h-full">
            <InputEmail
              id={OInputLogin.email}
              name={OInputLogin.email}
              placeholder="가입 시 입력한 이메일 ID를 입력하세요."
              icon={<PiFinnTheHumanThin />}
              onChange={handler}
              onClear={clearHandler}
              value={email}
            />

            <div className="mt-auto">
              <Button
                className="w-full flex justify-center"
                type="submit"
              >
                이메일 인증하기
              </Button>

              <LinkSmall
                className="text-center mt-0"
                content={
                  <div className="items-center justify-center flex space-x-2 text-fg-gray-desc">
                    <IoArrowBack />
                    <span>로그인 페이지로</span>
                  </div>
                }
                href={ROUTES.LOGIN}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
