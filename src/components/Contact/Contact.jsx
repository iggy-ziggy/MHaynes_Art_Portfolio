import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { useRef, useState } from "react";
import "./Contact.css";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const toast = useToast();
  const recaptchaRef = useRef(null);
  const [captchaValue, setCaptchaValue] = useState(null);

  const onSubmit = async (data) => {
    if (!captchaValue) {
      toast({
        title: "CAPTCHA Required",
        description: "Please complete the CAPTCHA before submitting.",
        status: "warning",
        isClosable: true,
      });
      return;
    }

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY);
      toast({
        title: "Email Sent",
        description: "Your message has been sent successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      reset();
      recaptchaRef.current.reset();
      setCaptchaValue(null);
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description:
          "An error occurred while sending your message. Please try again later.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box w="450px" h="65vh" maxW="90%" margin="8rem auto">
      <form onSubmit={handleSubmit(onSubmit)} className="contact">
        <Heading className="contact_heading" size="3xl">
          Contact
        </Heading>
        <FormControl id="from_name" marginBottom="4">
          <FormLabel>Name</FormLabel>
          <Input
            {...register("from_name", { required: true })}
            className="input"
          />
        </FormControl>
        <FormControl id="reply_to" marginBottom="4">
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            {...register("reply_to", { required: true })}
            className="input"
          />
        </FormControl>
        <FormControl id="message" marginBottom="4">
          <FormLabel>Message</FormLabel>
          <Textarea
            {...register("message", { required: true })}
            className="input"
          />
        </FormControl>
        <Box>
          <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={RECAPTCHA_SITE_KEY}
          // sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // for testing locally
          onChange={(value) => setCaptchaValue(value)}
          />
        </Box>
        <Button type="submit" className="contact_btn">
          Send
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
