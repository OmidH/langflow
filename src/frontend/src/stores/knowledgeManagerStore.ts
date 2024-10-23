import { KnowledgeType } from "@/types/knowledge";
import { create } from "zustand";
import { KnowledgeManagerStoreType } from "../types/zustand/knowledgeManager";

const useKnowledgeManagerStore = create<KnowledgeManagerStoreType>(
  (set, get) => ({
    knowledges: undefined,
    setKnowledges: (knowledges: KnowledgeType[]) => {
      set({
        knowledges,
        currentKnowledge: knowledges.find(
          (knowledge) => knowledge.id === get().currentKnowledgeId,
        ),
      });
    },
    setCurrentKnowledge: (knowledge: KnowledgeType | undefined) => {
      set({
        currentKnowledge: knowledge,
        currentKnowledgeId: knowledge?.id ?? "",
      });
    },
    currentKnowledge: undefined,
    currentKnowledgeId: "",
  }),
);

export default useKnowledgeManagerStore;
