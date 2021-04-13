import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Raphael Vasconcelos</Text>
        <Text color="gray.300" fontSize="small">
          raphael.vasconcelos01@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Raphael Vasconcelos"
        src="https://github.com/raphaelvasconcelos.png"
      />
    </Flex>
  );
}
