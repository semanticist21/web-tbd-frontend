'use client'

import Button from '@/components/common/button'
import InputEmail from '@/components/common/input_email'
import InputPassword from '@/components/common/input_password'
import LinkSmall from '@/components/common/link_small'
import TextError from '@/components/common/text_error'
import { ROUTES } from '@/routes/routes'
import { KInputLogin, OInputLogin } from '@/types/input_login'
import { createHandleClearInput, createHandleInput } from '@/util/handler'
import { createEmptyObj } from '@/util/type'
import { FormEvent, useState } from 'react'
import { BsFillQuestionCircleFill } from 'react-icons/bs'
import { IoArrowBack } from 'react-icons/io5'
import { PiFinnTheHumanThin, PiLockKeyThin } from 'react-icons/pi'

const ForgotPasswordPage = () => {
  // states
  const [authObj, setAuthObj] =
    useState<Record<KInputLogin, string>>(createEmptyObj())

  const [hasVerifiedEmail, setHasVerifiedEmail] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errMsg, setErrMsg] = useState<string>()

  // handlers
  const handler = createHandleInput(authObj, setAuthObj)
  const clearHandler = createHandleClearInput(authObj, setAuthObj)

  // submit
  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault()
    setIsLoading(true)

    // step-1
    if (!hasVerifiedEmail) {
      setHasVerifiedEmail(true)
    }
    // step-2
    else {
    }

    setIsLoading(false)
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
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col h-full">
            <InputEmail
              id={OInputLogin.email}
              name={OInputLogin.email}
              placeholder="가입 시 입력한 이메일 ID를 입력하세요."
              icon={<PiFinnTheHumanThin />}
              onChange={handler}
              onClear={clearHandler}
              value={authObj.email}
              disabled={hasVerifiedEmail}
            />

            {hasVerifiedEmail && (
              <InputPassword
                className="mt-4"
                id={OInputLogin.password}
                name={OInputLogin.password}
                placeholder="인증 번호를 입력하세요."
                icon={<PiLockKeyThin />}
                onChange={handler}
                onClear={clearHandler}
                value={authObj.password}
              />
            )}

            <div className="mt-auto">
              <TextError
                className="mb-2"
                errMsg={errMsg}
              />
              <Button
                className="w-full flex justify-center"
                type="submit"
                isLoading={isLoading}
              >
                {hasVerifiedEmail ? '인증번호 입력' : '이메일 인증하기'}
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
