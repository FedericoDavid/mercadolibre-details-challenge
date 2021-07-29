import React from "react";
import { Container, Stack, Box, Image, Input, StackDivider, Icon, Text } from "@chakra-ui/react";
import { AiOutlineSearch } from "react-icons/ai";
import { BiBox } from "react-icons/bi";
import { IoLocationOutline, IoCartOutline } from "react-icons/io5";

import logo from "../assets/logo.png";

export const Navbar = () => {
  return (
    <Box backgroundColor="primary.500" boxShadow="sm" paddingY={2}>
      <Container maxWidth="container.xl">
        <Stack spacing={2}>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" flex={1} spacing={12}>
              <Image objectFit="contain" src={logo} />
              <Stack
                alignItems="center"
                backgroundColor="white"
                borderRadius="sm"
                boxShadow="md"
                direction="row"
                divider={<StackDivider />}
                maxWidth={600}
                padding={2}
                width="100%"
              >
                <Input
                  paddingX={1}
                  placeholder="Buscar productos, marcas y más..."
                  variant="unstyled"
                />
                <Icon as={AiOutlineSearch} color="gray.400" height={5} width={5} />
              </Stack>
            </Stack>
            <Stack alignItems="center" color="blackAlpha.700" direction="row" spacing={1}>
              <Icon as={BiBox} height={6} width={6} />
              <Text fontSize="md" fontWeight="500">
                Envíos gratis por Mercado Puntos
              </Text>
            </Stack>
          </Stack>
          {/* stack de abajo */}
          <Stack alignItems="baseline" direction="row" justifyContent="space-between">
            <Stack alignItems="baseline" direction="row" spacing={12}>
              <Stack alignItems="center" direction="row" spacing={0}>
                <Icon as={IoLocationOutline} height={7} width={7} />
                <Stack spacing={0}>
                  <Text color="blackAlpha.700" fontSize="xs" lineHeight="normal">
                    Enviar a Fedev
                  </Text>
                  <Text fontSize="sm" lineHeight="normal">
                    Buenos Aires 1849
                  </Text>
                </Stack>
              </Stack>
              <Stack color="blackAlpha.600" direction="row" fontSize="sm" spacing={5}>
                <Text>Categorías</Text>
                <Text>Oferta</Text>
                <Text>Historial</Text>
                <Text>Supermercado</Text>
                <Text>Moda</Text>
                <Text>Vender</Text>
                <Text>Ayuda</Text>
              </Stack>
            </Stack>
            <Stack color="blackAlpha.900" direction="row" fontSize="sm" spacing={5}>
              <Text>Creá tu cuenta</Text>
              <Text>Ingresá</Text>
              <Text>Mis compras</Text>
              <Icon as={IoCartOutline} height={5} width={5} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
