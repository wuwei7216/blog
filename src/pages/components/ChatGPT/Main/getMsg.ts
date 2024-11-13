import { Ref } from "vue"
import { OpenAIStream } from "./openAIStream"
import { Message } from "../type"
import { Emits, Props } from "./props"
type Params = {
  msg: Ref<Message>
  props: Props
  emits: Emits
  message: Message[]
  inputVal: string
}

export default async ({ msg, props, emits, message, inputVal }: Params) => {
  /* 数据流 */
  const stream = await OpenAIStream(
    ``,
    message.map(i => ({ content: i.content, role: i.role })),
    "",
    props.modelValue!.model
  )

  const reader = stream.getReader()
  while (true) {
    const { done, value } = await reader.read()
    if (done) {
      emits("saveChats")
      break
    }
    msg.value.content += value
  }
}
