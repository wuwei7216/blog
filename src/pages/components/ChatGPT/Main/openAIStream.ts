export const OpenAIStream = async (
  openAiUrl: string,
  msg: any[],
  apiKey: string,
  model: string
) => {
  // const encoder = new TextEncoder()
  const decoder = new TextDecoder()

  const res = await fetch(
    "https://api.binjie.fun/api/generateStream?refer__1360=WqGxBD9DuQ3Ywq05o4%2BxCwf4A27DgWhC1hYD",
    {
      headers: {
        "Content-Type": "application/json",
        Origin: "https://chat18.aichatos.xyz",
        referer: "https://chat18.aichatos.xyz/",
        // Authorization: `Bearer ${apiKey}`,
      },
      method: "POST",
      body: JSON.stringify({
        prompt: msg[msg.length - 1].content,
        userId: "#/chat/1702972239753",
        network: true,
        system: "",
        withoutContext: false,
        stream: false,
      }),
    }
  )
  if (res.status !== 200) {
    throw new Error("OpenAI API returned an error")
  }

  return new ReadableStream({
    async start(controller) {
      const reader = (res as any).body.getReader() // 获取可读流的读取器
      while (true) {
        const { done, value } = await reader.read()
        if (done) {
          controller.close()
          break
        }
        value && controller.enqueue(decoder.decode(value))
      }
    },
  })
}
