import { useCallback, useEffect, useState } from "react";
import Input from "../Input";
import Modal from "../Modal";
import useLoginModal from "../../hooks/useLoginModal";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import useCurrentUser from "@/hooks/useCurrentUser";
import useRegisterModal from "@/hooks/useRegisterModal";

const LoginModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const router = useRouter();
  const { data: currentUser, mutate } = useCurrentUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoding, setisLoding] = useState(false);

  const onToggel = useCallback(() => {
    if (isLoding) {
      return;
    }

    loginModal.onClose();
    registerModal.onOpen();
  }, [isLoding, registerModal, loginModal]);

  const navigateToHome = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSubmit = useCallback(async () => {
    try {
      setisLoding(true);

      await signIn("credentials", {
        email,
        password,
        redirect: false, // Important to prevent Next.js from automatically redirecting
      });

      await mutate(); // Trigger a rerender by calling the mutate function

      navigateToHome(); // Redirect to home page

      loginModal.onClose();
    } catch (error) {
      console.log(error);
    } finally {
      setisLoding(false);
    }
  }, [loginModal, email, password, router, navigateToHome, mutate]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoding}
      />
      <Input
        placeholder="Password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoding}
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4 flex flex-row justify-center">
      <p>First Time using Twitter?</p>
      <span
        onClick={onToggel}
        className="text-white cursor-pointer hover:underline">
        Sign up
      </span>
    </div>
  );

  return (
    <Modal
      disabled={isLoding}
      isOpen={loginModal.isOpen}
      title="Login"
      actionLabel="Sign in "
      onClose={loginModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
