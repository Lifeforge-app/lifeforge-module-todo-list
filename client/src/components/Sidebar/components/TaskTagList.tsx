import { useCallback } from 'react'

import {
  EmptyStateScreen,
  SidebarTitle,
  WithQuery,
  useModalStore
} from '@lifeforge/ui'

import ModifyTagModal from '@/modals/ModifyTagModal'
import { useTodoListContext } from '@/providers/TodoListProvider'

import TaskTagListItem from './TaskTagListItem'

function TaskTagList() {
  const { open } = useModalStore()
  const { tagsListQuery } = useTodoListContext()

  const handleCreateTag = useCallback(() => {
    open(ModifyTagModal, {
      type: 'create'
    })
  }, [])

  return (
    <>
      <SidebarTitle
        actionButton={{
          icon: 'tabler:plus',
          onClick: handleCreateTag
        }}
        label="Tags"
      />
      <WithQuery query={tagsListQuery}>
        {tags =>
          tags.length > 0 ? (
            <>
              {tags.map(item => (
                <TaskTagListItem key={item.id} item={item} />
              ))}
            </>
          ) : (
            <EmptyStateScreen
              smaller
              icon="tabler:tag"
              message={{ id: 'tags' }}
            />
          )
        }
      </WithQuery>
    </>
  )
}

export default TaskTagList
