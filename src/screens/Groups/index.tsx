import { Container } from './styles';

import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native'

import { Button } from '@components/Button';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GroupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';


export function Groups() {
  const [groups, setGroups] = useState<string[]>([])

  const navigation = useNavigation()

  function handleNewGroup() {
    navigation.navigate('newgroup')
  }

  return (
    <Container>
      <Header/>
      <Highlight 
        title='Turmas'
        subtitile='jogue com a sua turma'
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GroupCard 
            title={item} 
          />
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 } }
        ListEmptyComponent={() => <ListEmpty message="Que tal cadastrar a primeira turma?"/>}
      />

      <Button 
        title='Criar nova turma'
        onPress={handleNewGroup}
      />
    </Container> 
  );
}

