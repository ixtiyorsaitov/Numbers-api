export const ApiService = {
  async getResult() {
    await new Promise((resolve) => setTimeout(resolve, 100));
    return {
      data: ` Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit facere recusandae magnam, id reiciendis nihil
                animi officia voluptates culpa! Assumenda ipsum quod dolorem
                possimus quidem incidunt odio ullam corporis quasi.`,
    };
  },
};
