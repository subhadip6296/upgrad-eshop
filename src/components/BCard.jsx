import React from "react";
import { Card,CardBody,Image,Heading,Text,Stack,Divider,CardFooter,Button,ButtonGroup } from "@chakra-ui/react";

const BCard = (props) => {
    console.log(props)
    return (
        <div>
            <Card maxW={"200px"} maxH={"400px"}>
                <CardBody>
                    <Image
                        src={props.image}
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                        maxH={"150px"}
                        maxW={"190px"}
                    />
                    <Stack mt="6" spacing="3">
                        <Heading size="md">Living room Sofa</Heading>
                        <Text>
                            {props.description}
                        </Text>
                        <Text color="blue.600" fontSize="2xl">
                            INR {props.price}
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup spacing="2">
                        <Button variant="solid" colorScheme="blue">
                            Buy now
                        </Button>
                        <Button variant="ghost" colorScheme="blue">
                            Add to cart
                        </Button>
                    </ButtonGroup>
                </CardFooter>
            </Card>
        </div>
    );
};

export default BCard;
