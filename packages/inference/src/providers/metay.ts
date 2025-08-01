/**
 * See the registered mapping of HF model ID => Metay model ID here:
 *
 * https://huggingface.co/api/partners/metay/models
 *
 * This is a publicly available mapping.
 *
 * If you want to try to run inference for a new model locally before it's registered on huggingface.co,
 * you can add it to the dictionary "HARDCODED_MODEL_ID_MAPPING" in consts.ts, for dev purposes.
 *
 * - If you work at Metay and want to update this mapping, please use the model mapping API we provide on huggingface.co
 * - If you're a community member and want to add a new supported HF model to Metay, please open an issue on the present repo
 * and we will tag Metay team members.
 *
 * Thanks!
 */

import { BaseConversationalTask } from "./providerHelper.js";

interface MetayTextGenerationResponse {
    generated_text: string;
}
    
export class MetayConversationalTask extends BaseConversationalTask {
    constructor() {
        super("metay", "https://api.metay.ai");
    }
}
