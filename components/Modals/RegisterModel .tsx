import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { signIn } from "next-auth/react";
import Input from "../Input";
import Modal from "../Modal";
import useLoginModal from "../../hooks/useLoginModal";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import useCurrentUser from "@/hooks/useCurrentUser";
import useRegisterModal from "@/hooks/useRegisterModal";

const RegisterModal = () => {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const router = useRouter();
  const { data: currentUser, mutate } = useCurrentUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUserName] = useState("");
  const [isLoding, setisLoding] = useState(false);

  const onToggel = useCallback(() => {
    if (isLoding) {
      return;
    }

    registerModal.onClose();
    loginModal.onOpen();
  }, [isLoding, registerModal, loginModal]);

  const navigateToHome = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSubmit = useCallback(async () => {
    try {
      setisLoding(true);

      await axios.post("/api/register", {
        email,
        password,
        username,
        name,
      });

      setisLoding(false);

      toast.success("Account created.");

      signIn("credentials", {
        email,
        password,
        redirect: false, // Important to prevent Next.js from automatically redirecting
      });

      await mutate(); // Trigger a rerender by calling the mutate function

      navigateToHome(); // Redirect to home page

      registerModal.onClose();
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setisLoding(false);
    }
  }, [email, password, registerModal, username, name, navigateToHome, mutate]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disabled={isLoding}
      />
      <Input
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disabled={isLoding}
      />
      <Input
        placeholder="Username"
        onChange={(e) => setUserName(e.target.value)}
        value={username}
        disabled={isLoding}
      />
      <Input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disabled={isLoding}
      />
    </div>
  );
  const footerContent = (
    <div className="text-neutral-400 text-center mt-4 flex flex-row justify-center">
      <p>Already have an account?</p>
      <span
        onClick={onToggel}
        className="text-white cursor-pointer hover:underline">
        Sign in
      </span>
    </div>
  );
  return (
    <Modal
      disabled={isLoding}
      isOpen={registerModal.isOpen}
      title="Create an account"
      actionLabel="Register"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
