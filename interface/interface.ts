interface Results {
    ps: number;
    pd: number;
    l: number;
    d: number;
    q: number;
}

interface ResultData  {
    [key: string]: Results[]; // Menambahkan index signature
};

interface CompressorData {
    [key: string]: number[]
}

interface Pipe {
    pipe_initial_pressure: number;
    required_output_pressures_p1: number;
    distance_to_consumer_l1: number;
    required_output_pressures_p2: number;
    distance_to_consumer_l2: number;
}

interface Error {
    pipe_initial_pressure?: string;
    required_output_pressures_p1?: string;
    distance_to_consumer_l1?: string;
    required_output_pressures_p2?: string;
    distance_to_consumer_l2?: string;
}

export type { Results, Pipe, Error, ResultData, CompressorData }