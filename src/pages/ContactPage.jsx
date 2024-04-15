import { Center, VStack } from "@chakra-ui/react";
import Contact from "../components/Contact/Contact";

const ContactPage = () => {
  return (
    <>
      <VStack mt='5rem'>
        <Center w='60%' style={{color: 'var(--lightGrey)', fontWeight: '600', fontSize: '1.2rem'}}>Please feel free to ask me whatever is on your mind.</Center>
        <Center w='60%' style={{color: 'var(--lightGrey)', fontWeight: '600'}}>In addition to the work featured on the site, I also wrote the code for the site itself. If you experience any bugs or have suggestions for a better user experience, please let me know.</Center>
        <Center style={{color: 'var(--lightGrey)', fontSize: '2rem'}}>. . .</Center>
      </VStack>
      <Contact />
    </>
  );
};

export default ContactPage;
