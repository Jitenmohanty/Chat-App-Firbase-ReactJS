import React from 'react';
import { HStack, Avatar, Text } from '@chakra-ui/react';

export default function Message({ text, uri, user='other' }) {
    return (
        <HStack alignSelf={user === 'me'?'flex-end':'flex-start'} bg={"gray.200"} paddingX={user === 'me' ?'4':'2'} paddingY={1} border={"2px solid skyblue"} borderRadius={'5'}>
            {
                user === 'other' && <Avatar src={uri}></Avatar>
            }
            <Text>{text}</Text>
            {
                user === 'me' && <Avatar src={uri}></Avatar>
            }
        </HStack>
    )
}
