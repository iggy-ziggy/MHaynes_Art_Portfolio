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
import './Contact.css'

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const toast = useToast();

  const onSubmit = async (data) => {
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
    <Box maxWidth="400px" margin="8rem auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Heading className="contact_heading" size='3xl'>Contact</Heading>
        <FormControl id="name" marginBottom="4">
          <FormLabel>Name</FormLabel>
          <Input {...register("name", { required: true })} className="input"/>
        </FormControl>
        <FormControl id="email" marginBottom="4">
          <FormLabel>Email</FormLabel>
          <Input type="email" {...register("email", { required: true })} className="input" />
        </FormControl>
        <FormControl id="message" marginBottom="4">
          <FormLabel>Message</FormLabel>
          <Textarea {...register("message", { required: true })} className="input" />
        </FormControl>
        <Button type="submit" className="contact_btn">
          Send
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
